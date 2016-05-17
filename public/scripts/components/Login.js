import React from 'react';
import $ from 'jquery';
import user from '../models/user';
import {browserHistory} from 'react-router';

export default React.createClass({
		getInitialState: function() {
		return {
			errors: {},
			user: user
		};
	},
		render: function() {
		return (
			<section className='row form_log-reg'>
				<div className='offset-by-four four columns'>
					<h3 className="log-reg">Sign in</h3>
					<form autocomplete='off' onSubmit={this.login}>
						<input className='input_log-reg' type='text' placeholder='email' ref='email' required='required' />
						<div className='error'>{this.state.errors.email ? this.state.errors.email.message : null} </div>
						<input className='input_log-reg' type='password' placeholder='password' ref='password' required='required' />
						<div className='error'>{this.state.errors.password ? this.state.errors.password.message : null}</div>
						<button className='button_log-reg' type='submit'> Login </button>
					</form>
				</div>
			</section>
		);
	},
	login: function(e) {
		e.preventDefault();
		$.ajax({
			headers: {
				Accept: 'application/json'
			},
			//is this the correct post url? is this just the auth part?
			url: '/auth/login',
			type: 'POST',
			data:{
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			success: (loggedArg)=>{
				this.state.user.set(loggedArg);
				//once logged in, takes user to browse sitter page.
				browserHistory.push('/dashboard');
			},
			error: (errorArg)=> {
				console.log('LOGIN error message');
				this.setState({errors: errorArg.responseJSON});
				browserHistory.push('/register');

			}
		});
	}
});



















