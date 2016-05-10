import React from 'react';
import user from '../../models/user';
import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		console.log(user);
		return {
			errors: {},
			user: user
		};
	},
	render: function() {
		return (
			<section className='page-register container'>
				<div><p>NAVIGATION: i want to see only home, logout.</p>
					<form onSubmit={this.makeProfile} ><h2>My Profile</h2>	
						<div ref='home'>
							<p>Where do you live?</p>
							<label><input type='radio' name='home' className='radio' value='an apartment, condo, townhouse' />Apartment, Condo, Townhouse</label>
							<label><input type='radio' name='home' className='radio' value='a small house' />Small house</label>
							<label><input type='radio' name='home' className='radio' value='a large house' />Large house</label>
						</div>
						<div ref='yard'>
							<p>What is your yard like?</p>
							<label><input type='radio' name='yard' className='radio' value='no yard' />No yard</label>
							<label><input type='radio' name='yard' className='radio' value='a small courtyard' />Small courtyard</label>
							<label><input type='radio' name='yard' className='radio' value='a small fenced yard' />Small fenced yard</label>
							<label><input type='radio' name='yard' className='radio' value='a large fenced yard' />Large fenced yard</label>
							<label><input type='radio' name='yard' className='radio' value='an unfenced yard' />Unfenced yard</label>
						</div>

						<div ref='devenv'>
							<p>What type of developed environment:</p>
							<label><input type='radio' name='dev-env' className='radio' value='city' />City</label>
							<label><input type='radio' name='dev-env' className='radio' value='suburbs' />Suburbs</label>
							<label><input type='radio' name='dev-env' className='radio' value='country' />Country</label>
						</div>
				
	
						<div>
							<p>Please take a moment to tell us a little bit more about yourself, home, and lifestyle:</p>
							<textarea placeholder='limit 500 characters' ref='sitterbio' name="sitterbio" cols='80' rows='40'></textarea>
						</div>
						<div ref='photo'>div placeholder for photo</div>
						Save and continue to My Critters:
						<button className="button-primary" type='submit'> Save </button>
					</form>
				</div>
			</section>
			);
	},
	makeProfile: function(e) {
		e.preventDefault();
		
		user.set({
			briefBio:this.refs.sitterbio.value,
			hmStyleSize: this.refs.home.querySelector('input:checked').value,
			ydStyleSize: this.refs.yard.querySelector('input:checked').value,
			devEnviron: this.refs.devenv.querySelector('input:checked').value
		});
		console.log(this.state.user);
		user.save({
			briefBio:this.refs.sitterbio.value,
			hmStyleSize: this.refs.home.querySelector('input:checked').value,
			ydStyleSize: this.refs.yard.querySelector('input:checked').value,
			devEnviron: this.refs.devenv.querySelector('input:checked').value
		});
		browserHistory.push('/critters');
	}
});
