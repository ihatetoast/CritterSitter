import React from 'react';
import $ from 'jquery';
import UserModel from '../../models/user';
import {browserHistory} from 'react-router';



export default React.createClass({
		getInitialState: function() {
		return {
			errors: {},
			user: UserModel
		};
	},
		render: function() {
// KATY: Potential Issues With Checkboxes and Radio Buttons
// Be aware that, in an attempt to normalize change handling
//  for checkbox and radio inputs, React uses a click event 
// in place of a change event. For the most part this 
//  behaves as expected, except when calling preventDefault 
//  in a change handler. preventDefault stops the browser from 
//  visually updating the input, even if checked gets toggled. 
//  This can be worked around either by removing the call to 
//  preventDefault, or putting the toggle of checked in a setTimeout.


		return (
			<section className='page-register container'>
				<div>
					<form onSubmit={this.makeProfile} ><h1>My Profile</h1>
						
						<div ref='home'>
							<p>Where do you live?</p>
							<label><input type='radio' name='home' id='radio' value='Apartment, Condo, Townhouse' />Apartment, Condo, Townhouse</label>
							<label><input type='radio' name='home' id='radio' value='Small house' />Small house</label>
							<label><input type='radio' name='home' id='radio' value='Large house' />Large house</label>
						</div>
						<div ref='yard'>
							<p>What is your yard like?</p>
							<label><input type='radio' name='yard' id='radio' value='No yard' />No yard</label>
							<label><input type='radio' name='yard' id='radio' value='Small courtyard' />Small courtyard</label>
							<label><input type='radio' name='yard' id='radio' value='Small fenced yard' />Small fenced yard</label>
							<label><input type='radio' name='yard' id='radio' value='Large fenced yard' />Large fenced yard</label>
							<label><input type='radio' name='yard' id='radio' value='Unfenced yard' />Unfenced yard</label>
						</div>

						<div ref='devenv'>
							<p>What type of developed environment:</p>
							<label><input type='radio' name='dev-env' id='radio' value='Urban' />Urban</label>
							<label><input type='radio' name='dev-env' id='radio' value='Suburban' />Suburban</label>
							<label><input type='radio' name='dev-env' id='radio' value='Rural' />Rural</label>
						</div>
						
						
						<div>
							<p>Please take a moment to tell us a little bit more about yourself, home, and lifestyle:</p>
							<textarea placeholder='limit 500 characters' ref='sitterbio' name="sitterbio" cols='80' rows='40'></textarea>
						</div>
						<div ref='photo'>div placeholder for photo</div>
						<button className="button-primary" type='submit'> Save </button>
					</form>
				</div>
			</section>
		);
	},
	makeProfile: function(e) {
		e.preventDefault();
		$.ajax({
			url: '/auth/register',
			type: 'POST',
			data:{
				photo: this.refs.photo.value,
				briefBio: this.refs.sitterbio.value,
				hmStyleSize: this.refs.home.querySelector('input:checked').value,
				ydStyleSize: this.refs.yard.querySelector('input:checked').value,
				devEnviron: this.refs.devenv.querySelector('input:checked').value
			},
			success: (loggedArg)=>{
				this.state.user.set(loggedArg);
				console.log('HUZZAH! success message');
				//once logged in, takes user to browse sitter page.
				browserHistory.push('/sitters');
			},
			error: (errorArg)=> {
				console.log('error');
				this.setState({errors: errorArg.responseJSON});

			}
		});
	}
});
