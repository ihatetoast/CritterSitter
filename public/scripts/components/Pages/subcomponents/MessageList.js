//v2 
// import Moment from 'moment.js';
//adding subcomp to style for <MyMessages /> page.

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		console.log(moment('20130208T080910.123Z'));
		return (
			<section className="messagelist-row">
				<h2>{this.props.receiverFirstName}'s Messages</h2>
				<div className="messagelist-div">
					<p>From: <span className="messagelist-from">{this.props.senderFirstName}</span> </p>
					<p>
						<span className="messagelist-sent">
						{/*Sent on: 
							<script src='moment.js'>
								<script>moment({this.props.sent}).format('DD/MM/YYYY')</script>
							</script>*/}
						</span>
					</p>
				</div>
				<div className="messagelist-viewbtn-div">
					<button className='msgSitter'>
						<Link 
							to={`/messages/${this.props.id}/conversation`} >
						View conversation with {this.props.firstName}
						</Link>
					</button>
				
				</div>
			</section>
		);
	}
});


					