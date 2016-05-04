import React from 'react';
import $ from 'jquery';
import user from '../../models/user';


export default React.createClass({
		getInitialState: function() {
		return {
			errors: {},
			user: user
		};
	},
		render: function() {
		return (
			<section className='page-login container'>
				<div className='offset-by-four four columns'>
					<form onSubmit={this.login} ><h1>Login</h1>
						<input type='text' placeholder='email' ref='email' required='required' />
						<div className='error'>{this.state.errors.email ? this.state.errors.email.message : null} </div>
						<input type='password' placeholder='password' ref='password' required='required' />
						<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
						<button className="button-primary" type='submit'> Login </button>
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
				console.log(loggedArg, 'HUZZAH! success message');
				//once logged in, takes user to browse sitter page.
				browserHistory.push('./sitters');
			},
			error: (errorArg)=> {
				console.log(errorArg, 'WAWAAA ...error message');
				this.setState({errors: errorArg.responseJSON});

			}
		});
	}
});



















