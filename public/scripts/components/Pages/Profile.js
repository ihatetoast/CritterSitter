import React from 'react';
import user from '../../models/user';//this is a session, katy. ooooh. aaaah.
import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		console.log(user);
		return {
			errors: {},
			user: user
			//this.state.user is infor for the logged in person this.state.user.get('what')
		};
	},
	render: function() {
		return (
			<section className='page-register container'>
				<div>
					<form onSubmit={this.makeProfile} ><h2>My Profile</h2>	
						<div ref='hmStyleSize'>
							<p>Where do you live?</p>
							<label><input type='radio' name='home' className='radio' value='an apartment, condo, or townhouse' />Apartment, Condo, Townhouse</label>
							<label><input type='radio' name='home' className='radio' value='a small house' />Small house</label>
							<label><input type='radio' name='home' className='radio' value='a large house' />Large house</label>
						</div>
						<div ref='ydStyleSize'>
							<p>What is your ydStyleSize like?</p>
							<label><input type='radio' name='yard' className='radio' value='no yard' />No yard</label>
							<label><input type='radio' name='yard' className='radio' value='a small courtyard' />Small courtyard</label>
							<label><input type='radio' name='yard' className='radio' value='a small fenced yard' />Small fenced yard</label>
							<label><input type='radio' name='yard' className='radio' value='a large fenced yard' />Large fenced yard</label>
							<label><input type='radio' name='yard' className='radio' value='an unfenced yard' />Unfenced yard</label>
						</div>

						<div ref='devEnviron'>
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
		var hmStyleSize = this.refs.hmStyleSize.querySelector('input:checked') ? this.refs.hmStyleSize.querySelector('input:checked').value : this.state.user.get('hmStyleSize');
		var ydStyleSize = this.refs.ydStyleSize.querySelector('input:checked') ? this.refs.ydStyleSize.querySelector('input:checked').value : this.state.user.get('ydStyleSize');
		var devEnviron = this.refs.devEnviron.querySelector('input:checked') ? this.refs.devEnviron.querySelector('input:checked').value : this.state.user.get('devEnviron');
		user.save({
			briefBio:this.refs.sitterbio.value,
			hmStyleSize: hmStyleSize,
			ydStyleSize: ydStyleSize,
			devEnviron: devEnviron
		},
			{
			success: ()=>{
				console.log('SUCCESS: makeProfile worked. Profile should be made/edited.');
				browserHistory.push('/critters');
			},
			error: ()=>{
			console.log('ERROR: makeProfile did not work. Bugger!');
			}
		});
	}

});

