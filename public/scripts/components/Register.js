import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import user from './../models/user';


export default React.createClass ({
	getInitialState: function() {
		return{
			errors: {},
			user: user
		};
	},
	render: function() {
		return(
			<section className='row form_log-reg'>
				<div className='offset-by-four four columns'>
					<h3 className="log-reg">Register</h3>
					<form autocomplete='off' onSubmit={this.register}>
						<input className='input_log-reg' type="text" placeholder="First Name" ref='firstName' />
						<input className='input_log-reg' type="text" placeholder="Last Name" ref='lastName' />
						<input className='input_log-reg' type="text" placeholder="email" ref='email' />
						<div className='error'>{this.state.errors.email ? this.state.errors.email.message : null}</div>
            <input className='input_log-reg' type="password" placeholder="password" ref='password'/>
            <div className='error'>{this.state.errors.password ? this.state.errors.password.message : null}</div>
            <button className='button_log-reg' type='submit'>Register now</button>
					</form>
				</div>
			</section>
			);
	},
	register: function(e){
		e.preventDefault();
		$.ajax({
			url: '/auth/register',//whatever local i'm on, then go to the /auth/reg
			type: 'POST',
			headers: {
				Accept: 'application/json'//because i only want json from the server
			},
			data: {
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			success: (regUser)=>{
				this.state.user.set(regUser);//this updates the model called user (instantiated as user)
				browserHistory.push('/profile');
			},
			error:(errArg)=>{
				console.log('register: Ajax POST error');
				this.setState({errors: errArg.responseJSON});
			}
		});
	}
});






























