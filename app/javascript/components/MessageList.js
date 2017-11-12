import React from 'react';

class MessageList extends React.Component {

messagesList(){
const { messages } = this.props
debugger
return (
<div>
(messages.map((message, index) =>

<p>{ message.user.full_name } at { message.written_at } says { message.body }</p>
)
</div>
);
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