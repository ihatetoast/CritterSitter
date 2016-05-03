import React from 'react';
import {Link, browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},

	componentDidMount: function() {
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
	},

	render: function() {
		//if user is logged in, what links does she see?: my critters, browse,logout
		if(this.state.user.get('id')) {
			return (<nav>
				<Link to="/Pages/Register">My Profile</Link>
				<Link to="/Pages/Critters">My Critters</Link>
				<Link to="/Pages/Browse">Browse Sitters</Link>
				<a href="#" onClick={this.logout}>Logout</a>
			</nav>);
		}//if user is not logged in, what links does she see? browse,login 
		else {
		return (<nav>
			<Link to='/Pages/Browse'>Browse Sitters</Link>		
			<Link to='/Pages/Login'>Login</Link>
		</nav>);
		}
	},

	logout: function(e) {
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
		browserHistory.push('/');
	}
});
