class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	// should this be 'messages'?
      messages: props.chat_room.message,
      errors: []
    };
  }
}