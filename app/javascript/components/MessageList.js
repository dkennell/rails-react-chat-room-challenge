import React from 'react';

class MessageList extends React.Component {

messagesList(){
  let { messages } = this.props
  let final = ""
    messages.map((message, index) => {
    	final += "{ message.user.full_name } at { message.written_at } says { message.body }"
 }
 return final
}

  render(){
    return (
	  <div>
       { this.messagesList() }
      </div>
  )
}

}

export default MessageList