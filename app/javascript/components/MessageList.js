class MessageList extends React.Component {
render(){
return (
{ this.messagesList() }
)
}
messagesList(){
const { messages } = this.props
return messages.map((message, index) =>

{ message.user.full_name } at { message.written_at } says
{ message.body }
);
}
}