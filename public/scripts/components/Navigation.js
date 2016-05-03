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
				<Link to='/'>Home</Link>
				<Link to="/register">My Profile</Link>	
				<Link to='/mycritters'>Critters</Link>
				<Link to='/sitters'>Browse Sitters</Link>
				<Link to='/message'>Message Sitter</Link>
				<Link to='/messages'>My Messages</Link>
				<Link to='/login'>Login</Link>

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
