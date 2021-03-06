import React from 'react';
import MessageList from './MessageList'

class ChatRoom extends React.Component {
	debugger;
  constructor(props) {
    super(props);
    this.state = {
    	// should this be 'messages'?
      messages: this.props.chat_room.messages,
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

newMessage(message){
  const { messages } = this.state;
  let msgs = [...messages];
  msgs.push(message);
  this.setState({messages: msgs});
}

postMessage(event){
  event.preventDefault();
  App.chatChannel.perform("send_message", { chat_room_id: this.props.chat_room.id, body: this.refs.body.value });    this.refs.body.value = "";
}

form(){
  return (
    <div className="col-sm-12">
	  <form className="form-inline" onSubmit={ this.postMessage.bind(this) }>
		<div className="form-group col-sm-11">
	  	  <input style={{width: "100%"}} ref="body" type="text" className="form-control" placeholder="Text..." />
		</div>
		<div className="form-group col-sm-1">
	  	  <button type="submit" className="btn btn-primary">send</button>
		</div>
	  </form>
	</div>
  )
}

render() {
		const  messages  = this.props.chat_room.messages;
		return (
			<div className="row">
				<div className="col-sm-12">
					<MessageList messages={ messages } />
				</div>
			{ this.form() }
			</div>
	)
}

}

export default ChatRoom