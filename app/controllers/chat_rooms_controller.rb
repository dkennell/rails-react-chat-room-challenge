class ChatRoomsController < ApplicationController

  def index
  	binding.pry
    @chat_rooms = ChatRoomDecorator.decorate_collection(ChatRoom.all)
  end

  def show
  	@chat_room = ChatRoom.find(params[:id])
  	@json_object = ChatRoomsSerializer.new(@chat_room).as_json
  end

end
