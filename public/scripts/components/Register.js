import React from 'react';
import $ from 'jquery';
import {hashHistory} from 'react-router';
import Navigation from './Navigation';
import user from '../models/user';


export default React.createClass ({
	getInitialState: function() {
		return{
			errors: {},
			user: user
		};
	},
	render: function() {
		return(
			<section>
				<h1>Register</h1>
				<form onSubmit={this.register}>
					<input type="text" placeholder="First Name" ref='firstName' />
					<input type="text" placeholder="Last Name" ref='lastName' />
					<input type="text" placeholder="email" ref='email' />
					<div className='error'>{this.state.errors.email ? this.state.errors.email.message : null}</div>
                    <input type="password" placeholder="password" ref='password'/>
                    <div className='error'>{this.state.errors.password ? this.state.errors.password.message : null}</div>
                    <button type="submit">Register now</button>
				</form>
			</section>
			);
	},
	register: function(e){
		console.log('User is registered.');
		e.preventDefault();
		$.ajax({
			url: '/auth/register',//whatever local i'm on, then go to the /auth/reg
			type: 'POST',
			headers: {
				Accept: 'application/json'//because i only want json from teh server
			},
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value,
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value
			},
			success: (regUser)=>{
				console.log('Ajax POST success');
				console.log(regUser);
				this.state.user.set(regUser);//this updates the model called user (instantiated as user)
				console.log(this.state.user);
				hashHistory.push('/');
			},
			error:(errArg)=>{
				console.log('Ajax POST error');
				console.log(errArg);
				this.setState({errors: errArg.responseJSON});
			}
		});
	}
});






























