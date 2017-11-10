class MessageBroadcastJob < ApplicationJob
  queue_as :messages

  def perform(message_id)
    message = Message.find_by(id:message_id)

	  if message
	  	serialized_message = MessageSerializer.new(message).as_json
	  	ActionCable.server.broadcast("chat_rooms_#{message.chat_room.id}_channel", message:serialized_message)
	  else
	  	puts("message not found with id: #{message_id}")
	  end
  end

end
