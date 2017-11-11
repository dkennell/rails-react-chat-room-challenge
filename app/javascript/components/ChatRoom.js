class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	// should this be 'messages'?
      messages: props.chat_room.message,
      errors: []
    };


  }

  componentDidMount(){
	App.chatChannel = App.cable.subscriptions.create({
	channel: "ChatRoomsChannel",
	chat_room_id: this.props.chat_room.id,
	}, {
	  received: ({type, data}) => {
	    switch (type) {
		  case "new_message":
			this.newMessage(data);
			break;
		  case "errors":
			this.addErrors(data);
			break;
		}
	  }
	});
  }

}