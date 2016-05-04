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
				<Link className="nav-link" to='/'>Home</Link>
				<Link className="nav-link" to='/register'>Register</Link>	
				<Link className="nav-link" to='/profile'>My Profile</Link>	
				<Link className="nav-link" to='/mycritters'>Critters</Link>
				<Link className="nav-link" to='/sitters'>Browse Sitters</Link>
				<Link className="nav-link" to='/message'>Message Sitter</Link>
				<Link className="nav-link" to='/messages'>My Messages</Link>
				<Link className="nav-link" to='/login'>Sign in</Link>

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
