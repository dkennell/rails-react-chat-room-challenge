class ChatRoomsController < ApplicationController

  def index
    @chat_rooms = ChatRoomDecorator.decorate_collection(ChatRoom.all)
  end

  

end
