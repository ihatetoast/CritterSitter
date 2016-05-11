//i need a params here because i do not want to see all the messages, just mine

import React from 'react';
import Messages from './../../collections/MessagesCollection';
import IndivMessage from './subcomponents/IndivMessage';
import user from './../../models/user';


export default React.createClass({
	//messageListener()
	getInitialState: function() {
		return{
			Messages:Messages,//for mapping
			user:user};//for filtering
	},
	// next is cWillMt happens before first render. did is after.
	// both happen once!
	//any time props change (parent passes in sthg different) compenentWillReceiveProps
	//componentWillUpdate is when we change the state. 
	componentDidMount: function(){
//these are the listeners (.on is a clue)
		Messages.on('update', ()=>{
			this.setState({Messages:Messages});

		});
		Messages.fetch({
			data: {
				withRelated: ['recipient', 'sender']
			}
		}) ;
	},
	componentWillUnmount: function(){
		//turn this into a named function somewhere else:
		// ()=>{
		// 	console.log('Messages did update.');
		// 	this.setState({Messages:Messages});
		// } reference it where i stole it from this.namedFunction with .off


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
			<p>NAVIGATION: i only want to see home, logout, browse, my profile</p>
				<h2>My messages</h2>
				<div>
					{listOfMessages}
				
				</div>
			</section>
		);
	}
});
//filter out to me and from me. collect them all.
//dazzletime: then break them up by from with array methods.
