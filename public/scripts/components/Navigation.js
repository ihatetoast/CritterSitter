import React from 'react';
import {Link, browserHistory} from 'react-router';


export default React.createClass({
	// getInitialState: function() {
	// 	return {
	// 		user: user
	// 	};
	// },

	// componentDidMount: function() {
	// 	this.state.user.on('change', () => {
	// 		this.setState({
	// 			user: user
	// 		});
	// 	});
	// },

	render: function() {
		//if user is logged in, what links does she see?: my critters, browse,logout
		// if(this.state.user.get('id')) {//if user is not logged in, what links does she see? browse,login 
		//start with everything showing. later create the if/else	
			return (<nav>
				<Link to="/Register">My Profile</Link>
				<Link to="/Critters">My Critters</Link>
				<Link to="/Browse">Browse Sitters</Link>
				<a href="#" onClick={this.logout}>Logout</a>		
				<Link to='/Login'>Login</Link>
			</nav>);
		
	}

	// logout: function(e) {
	// 	e.preventDefault();
	// 	this.state.user.clear();
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: '/auth/logout'
	// 	});
	// 	browserHistory.push('/');
	// }
});
