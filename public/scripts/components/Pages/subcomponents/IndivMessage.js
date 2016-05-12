//v2 

//changing subcomp to style for <Conversation /> page.

import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section>
				<h2>Conversation between me and {this.props.senderFirstName} {this.props.senderLastName}</h2>
				<div>
					<p>To: <span>{this.props.receiverFirstName} </span> </p>
					<p>From: <span>{this.props.senderFirstName}</span> </p>
				</div>
				<div>
					{/*Below will need function to show only basic time/date*/}
					<span>Sent on: {this.props.sent}</span>
					}
				</div>
				<div>
					{this.props.body}
				</div>
				
			</section>
		);
	}
});

// v2: could I link back to sender to write
// another message?