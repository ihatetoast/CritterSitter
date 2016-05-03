import React from 'react';
import $ from 'jquery';
import user from '../../models/user';


export default React.createClass({
	getInitialState: function() {
		return{
			errors: {},
			user: user
		};
	},
	render: function() {
		return (
			<section className='page-login container'>
				<div className='offset-by-four four columns'>
					<form onSubmit={this.login} ><h1>Login</h1>
						<input type='text'placeholder='email' ref='email' required='required' />
						<div className='error'>{this.state.errors.email ? this.state.errors.message : null} </div>
						<input type='password'placeholder='password' ref='email' required='required' />
						<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
						<button className="button-primary" type='submit'> Login </button>
					</form>
				</div>
			</section>
		);
	}
});



















