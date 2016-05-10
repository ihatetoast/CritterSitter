//i need a params here because i do not want to see all the messages, just mine

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
	// updateMessages: function (){
	// 	console.log('Messages did update.');
	// 	this.setState({Messages:Messages});
	// },

	componentDidMount: function(){
		console.log('MYMESSAGES component did mount');

		Messages.on('update', ()=>{
			console.log('Messages did update.');
			this.setState({Messages:Messages});});
		Messages.fetch({
			data: {
				withRelated: ['recipient', 'sender']
			}
		});
	},
	render: function() {
		console.log('rendered messages like a goddess');
		//filter out those who are NOT this user.
		let userId = this.state.user.get('id');
		let listOfMessages = this.state.Messages.filter((user,i,arr)=>{
			if( (user.get('id')) === userId) {
				return true;
			}
			else{
				return false;
			}
			})

// function requireAuth(nextState, replace) {
// 	  if (!user.get('id')) {
// 	    replace({
// 	      pathname: '/login'
// 	    });
// 	}
// }

		.map((msgval,i,arr)=>{
			return(
					<IndivMessage
						key = {msgval.get('id')}
						id = {msgval.get('id')}
						
						body = {msgval.get('messageBody')}
						sent = {msgval.get('createdAt')}
						
						//msgval gives a collection of models. get() is used
						//with arrays' values, so now i need ('messages').something
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
				<h1>My messages</h1>
				<div>
					{listOfMessages}
				
				</div>
			</section>
		);
	}
});

