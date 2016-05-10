import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section>
				<div>
					<p>To: <span>{this.props.receiverFirstName} </span> <span>{this.props.receiverLastName} </span>
					From:<span>{this.props.senderFirstName}</span> <span>{this.props.senderLastName}</span></p>
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