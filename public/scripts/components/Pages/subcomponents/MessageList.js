//v2 

//adding subcomp to style for <MyMessages /> page.

import React from 'react';
// import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<section className="messagelist-row">
			
				<div className="messagelist-div">
					<p>From: <span className="messagelist-from">{this.props.senderFirstName}</span> </p>
					<p><span className="messagelist-sent">Sent on: {this.props.sent}</span></p>
				</div>
				<div>
					{this.props.body}
				</div>
				
			</section>
		);
	}
});


				// 	<div className="messagelist-viewbtn-div">
				// 	<button className='msgSitter'>
				// 		<Link 
				// 			to={`/messages/${this.props.id}/conversation`} >
				// 		View conversation with {this.props.firstName}
				// 		</Link>
				// 	</button>
				
				// </div>