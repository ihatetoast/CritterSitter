import React from 'react';
import {Link, browserHistory} from 'react-router';
import user from '../models/user';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	componentDidMount: function() {
		this.state.user.on('change', () => {
			console.log('Component did mount');
			this.setState({
				user: user
			});
		});
	},
	render: function() {	
		if(this.state.user.get('id')){
			console.log('the user IS logged in. Should see only HOME, MY PROFILE, MY CRITTERS, BROWSE SITTERS,  MY MESSAGES, LOG OUT');
			return (
				<div className="navdiv">
					<a href="#" className="nav-link" onClick={this.logout}>Logout</a>
					<Link className="nav-link" to='/critters'>My Critters</Link>
					<Link className="nav-link" to='/profile'>My Profile</Link>
					<Link className="nav-link" to='/browse'>Browse Sitters</Link>	
					<Link className="nav-link" to='/messages'>My Messages</Link>
					<Link className="nav-link" to='/home'>Home</Link>	
					
					
					
					{/*<Link className="nav-link" to={'/browse/:recipientId/message'}></Link>*/}
				
					
				</div>);
		}else{
			console.log('the user is NOT logged in. Should see only HOME, REGISTER, SIGN IN.');
			return (
				<div className="navdiv">
					<Link className="nav-link" to='/home'>Home</Link>
					<Link className="nav-link" to='/register'>Register</Link>	
					<Link className="nav-link" to='/login'>Sign in</Link>
				</div>);
		}
	},
	logout: function(e) {
		e.preventDefault();
		console.log('user is loggedOUT');
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
		browserHistory.push('/home');
	}
});








