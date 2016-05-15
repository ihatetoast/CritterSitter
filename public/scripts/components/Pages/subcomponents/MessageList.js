//v2 
//adding subcomp to style for <MyMessages /> page.

import React from 'react';
import {Link} from 'react-router';
// import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<section className="messagelist-item">
				<div className='row'>
									<div className='one-third column'>
										<img src={this.props.fromPhoto}/>
									</div>
								<div className='two-thirds column'>
									<div className='fromdatebody'>
										<div>
											From: <span className="fromsent">{this.props.senderFirstName}</span>
										</div>
										<div>
											Sent: <span className="fromsent">{this.props.sent}</span>
										</div>
										<div>
											{this.props.body}
										</div>
										<div className='buttondiv'>
											<Link to={`/browse/${this.props.}/message`}>
												<button className='msgSitter'>
													Message
												</button>
											</Link>
										</div>
									</div>
								</div>	
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