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
			this.setState({
				user: user
			});
		});
	},
	render: function() {
		console.log(this.state.user.toJSON()); 
		if(this.state.user.get('id')){
			return (
				<div className="mini_navdiv">
					<a href="#" className="mini_nav-link" onClick={this.logout}>Logout</a>
					<Link className="mini_nav-link pipe" to='/home'>Home</Link>
					{/*<Link className="nav-link" to={'/browse/:recipientId/message'}></Link>*/}
				</div>);
		}else{
			return (
				<div className="mini_navdiv">
					{/*<Link className="nav-link" to='/home'>Home</Link><span>|</span>*/}
					<Link className="mini_nav-link" to='/register'>Register</Link>	
					<Link className="mini_nav-link pipe" to='/login'>Sign in</Link>
				</div>);
		}
	},
	logout: function(e) {
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
		browserHistory.push('/home');
	}
});
