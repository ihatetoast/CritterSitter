import React from 'react';
import Message from '../../models/Message';
import {browserHistory} from 'react-router';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			//instatiating, so needs () bc method
			message: new Message()
		};
	},
	//ask instructor: this was not in before. why?
	// componentDidMount: function() {
	// 	this.state.Message.on('change', () => {
	// 		console.log('Message to Sitter: Component did mount');
	// 		this.setState({
	// 			Message: Message
	// 		});
	// 	});
	// },
	render: function() {
		return (
			<section>
				<p>NAVIGATION: i want to see only logout, home, browse</p>
				<h2>Send a message</h2>
				<div>
				<p>Introduce yourself! Write a <span className='italSpan'>brief</span> message to the sitters
				and let them know a little about yourself and what you're looking for. 
				<span className='boldSpan'>Be sure to include a way for them to reach you (email or mobile).</span></p>
				</div>
				<div>
					<form onSubmit={this.sendMessage}>
						<div className='message-form container'>
							<div className='msgReceiver'>
							</div>
							<textarea placeholder='message to the sitter' className='messageBody' ref='messageTo' name='messageTo' cols='80' rows='40'></textarea>
						</div>
						<button className="button-primary" type='submit'>Send</button>
					</form>
				</div>
			</section>
		);
	}, 
	sendMessage: function(e){
		e.preventDefault();
		$.ajax({
			url:'/api/v1/Message',
			type: 'POST',
			headers: {
				Accept: 'application/json'
			},
			data: {
				recipientId: this.props.params.recipientId,
				messageBody: this.refs.messageTo.value
			},
			success: (msgSend)=>{
				this.state.message.set(msgSend);
			},
			error: (errArg)=>{
				console.log('message to sender did not post.');
				this.setState({errors: errArg.responseJSON});
			}
		});
		browserHistory.push('/browse');
	}
});







