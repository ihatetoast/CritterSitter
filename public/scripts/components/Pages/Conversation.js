//a page dedicated to the conversations between one sender and recipient
// i want to see a simple JSX of from/to with msg body with a
// short form with textarea and submit to send a message back.

//to get here, i have pressed a button on the MyMessages page.
//send button refreshes page with latest entry. newest at top

import React from 'react';
import Messages from './../../collections/MessagesCollection';
import IndivMessage from './subcomponents/IndivMessage';
import user from './../../models/user';


export default React.createClass({
	getInitialState: function() {
		return{
			Messages:Messages,//for mapping
			user:user};//for filtering
	},
	componentDidMount: function(){
		Messages.on('update', ()=>{
			this.setState({Messages:Messages});
		});
		Messages.fetch({
			data: {withRelated: ['recipient', 'sender']}
		}) ;
	},
	componentWillUnmount: function(){
		Messages.of('update');
	},
	_loadConversation: function(){
		this.setState({Messages:Messages, user:user});
	},
	render: function() {
		//filter out those who are NOT this user.
		let userId = this.state.user.get('id');
		let listOfMessages = this.state.Messages.filter((msg,i,arr)=>{
			if( (msg.get('recipientId')) === userId) {
				return true;
			}
			else{
				return false;
			}
			})
		.map((msgval,i,arr)=>{
			return(
					<IndivMessage
						key = {msgval.get('id')}
						id = {msgval.get('id')}
						
						body = {msgval.get('messageBody')}
						sent = {msgval.get('createdAt')}
						senderFirstName = {msgval.get('sender').firstName}
						senderLastName = {msgval.get('sender').lastName}
						receiverFirstName = {msgval.get('recipient').firstName}
						receiverLastName = {msgval.get('recipient').lastName}
						/>
				);
		});
		return (
			<section>
				<div>
					{listOfMessages}
				
				</div>
			</section>
		);
	}
});
