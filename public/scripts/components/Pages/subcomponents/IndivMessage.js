import React from 'react';
import Message from '../../../models/Message';
// import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			//instatiated
			message: new Message
		};
	},
	render: function() {
		return (
			<section>
				<div>
					<span>{this.props.firstName}</span><span>{this.props.lastName}</span>
				</div>
				<div>
					{/*Below will need function to show only basic time/date*/}
					<span>Sent on: {this.props.createdAt}</span>
					}
				</div>
				<div>
					{this.props.messageBody}
				</div>
				
			</section>
		);
	}
});

//there'll be a userId of one sending it
//a recipientId for the one it's to
//messageBody