import React from 'react';
//NOTES: 
// what I want the user to do:
// 	click a button to send a message to the sitter whose bio she's reading.
// what I want the function to do:
// 	capture the id of the reciever-sitter as msgTo
// 	capture the id of the sender-sitter as msgFrom
// 	capture the text in the body of the message
// 	send all three to the BE message model where it is stored.


export default React.createClass({
	render: function() {
		return (
			<section>
				<form onSubmit={this.makeMessage}>
					<div className='indivsitter-madlibs'>
						{/*get last name initial by CSS (limit field?*/}
						<p><span>{this.props.firstName}</span><span id='lastNameInitial'>{this.props.lastName}</span> lives in 
						<span> {this.props.home}</span> with <span>{this.props.yard}</span> in the<span> {this.props.environment}</span>  
						with <span>{this.props.number}</span> critters/s (<span>{this.props.species}</span>, <span>{this.props.other}</span>).</p>
					</div>
					<div className='indivsitter-textfields'>
						<h6>About Sitter:</h6>
						<div>{this.props.sitterBio}</div>
						<h6>About Critter/s:</h6>
						<div>{this.props.critterBio}</div>
					</div>
					<div className='indivsitter-button'>
						<button>Message Sitter</button>
					</div>
				</form>
			</section>
		);
	},
	makeMessage: function() {
		console.log ('I\'m sittin\' on the shitter, messagin\' a sitter');
	}
});


		