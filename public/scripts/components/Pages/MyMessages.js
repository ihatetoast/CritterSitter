//i need a params here because i do not want to see all the messages, just mine

import React from 'react';
import Messages from './../../collections/MessagesCollection';
import MessageList from './subcomponents/MessageList';
import user from './../../models/user';

var moment = require('moment');

export default React.createClass({
	//messageListener()
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
			data: {
				withRelated: ['recipient', 'sender']
			}
		});
	},
	componentWillUnmount: function(){
		Messages.off('update', this._loadMessages);
	},
	_loadMessages: function(){
		this.setState({Messages:Messages});
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
			//	wheregoes = moment(whati'mgetting / howit is).format(style)
			var date = moment(msgval.get('createdAt').format("DD MMM YYYY"));
			return(
					<MessageList
						key = {msgval.get('id')}
						id = {msgval.get('id')}
						
						body = {msgval.get('messageBody')}
						sent = {date}
						senderFirstName = {msgval.get('sender').firstName}
						senderLastName = {msgval.get('sender').lastName}
						receiverFirstName = {msgval.get('recipient').firstName}
						receiverLastName = {msgval.get('recipient').lastName}
						/>
				);
		});
		return (
			<section>
				<h2>{this.state.user.get('recipient')}'s messages</h2>
				<div>
					{listOfMessages}
				</div>
			</section>
		);
	}
});
//filter out to me and from me. collect them all.
//dazzletime: then break them up by from with array methods.
