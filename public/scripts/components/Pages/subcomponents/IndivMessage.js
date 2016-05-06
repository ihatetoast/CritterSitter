import React from 'react';

export default React.createClass({
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

