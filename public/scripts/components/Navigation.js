import React from 'react';
import {Link} from 'react-router';
import user from '../models/user';


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
		console.log(this.state.user.toJSON()); 
		if(this.state.user.get('id')){
			console.log('the user IS logged in. Should see only HOME, MY PROFILE, MY CRITTERS, BROWSE SITTERS,  MY MESSAGES, LOG OUT');
			return (
				<div className="navdiv">
					<Link className="nav-link" to='/browse'>Browse</Link>
					<Link className="nav-link" to='/critters'>My Critters</Link>
					<Link className="nav-link" to='/profile'>My Profile</Link>
					<Link className="nav-link" to='/messages'>Messages</Link>
				
						
					{/*<Link className="nav-link" to={'/browse/:recipientId/message'}></Link>*/}
				</div>);
		}else{
			console.log('the user is NOT logged in. REGISTER, SIGN IN at top right.');
			return (
				<div className="navdiv">
				</div>);
		}
	}
});
