import React from 'react';


export default React.createClass({

	render: function() {
		return (
			<section>
				<h1>Send a message</h1>
				<div>
				<p>Introduce yourself! Write a <span className='italSpan'>brief</span> message to the sitters
				and let them know a little about yourself and what you're looking for.
				<span className='boldSpan'>Be sure to include a way for them to reach you (email or mobile).</span></p>
				</div>
				<div>
					<form onSubmit={this.sendMessage}>
						<div className='message-form container'>
							<textarea placeholder='message to the sitter' ref='messageTo' name='messageTo' cols='70' rows='20'></textarea>
						</div>
						<button className="button-primary" type='submit'>Send</button>

					</form>
				</div>

			</section>
		);
	}, 
	sendMessage: function(){
		//when user clicks send, the message goes to the recipient's mymessages bank.
		//captures message and stores in BE
		//i need recipient's id
		//recipient (not in this component) needs sender's id.
		//browserHistory should push to /browse 
		browserHistory.push('/browse');


	}
});













