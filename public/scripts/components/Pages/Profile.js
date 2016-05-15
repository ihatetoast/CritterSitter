import React from 'react';
import user from '../../models/user';//this is a session, katy. ooooh. aaaah.
import {browserHistory} from 'react-router';

import filepicker from 'filepicker-js';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user: user,
			photo:''
		};
	},
	componentDidMount: function(){
		this.state.user.on('change', this._updateProfile);
	},
	componentWillUnmount: function(){
		this.state.user.off('change', this._updateProfile);
	},
	_updateProfile: function(){
		this.setState({user:user});
	},
	render: function() {
		return (
			<section className='page-register'>
				<div className='container'>
				<h2>Profile</h2>
					<form onSubmit={this.makeProfile} >

						<div className='photopara row'>
							<div className='profileparadiv two-thirds column'>
								<h5>Tell us about yourself:</h5>
								<div className='profilepara-div'>
									<p className='profilepara'>Take a moment to let your personality shine. Are you 
									active and taking your dogs on walks every day, or are you curled up on the couch
									with a good book and pets at your side? Maybe a little of both. Let other sitters
									know a little about you and your lifestyle so that good pet connections can be made.  
									</p>
									<div className='textarea'>
										<textarea 
											placeholder='limit 500 characters' 
											ref='sitterbio' 
											name="sitterbio"  
											rows='7' 
											defaultValue={this.state.user.get('briefBio')}/>
									</div>
								</div>
							</div>
							<div className='photo-container one-third column'>
								<h5> Add a profile photo:</h5>
								<div>
									<button	type = 'button' onClick = {this._uploadPhoto}>Upload a photo</button>
								</div>
								<div>
									<img src={this.state.photo} ref='photo'/>
								</div>
							</div>	
						</div>
						<div className='radiobuttonsintro row'>
							<div className='offset-by-one ten columns'>
								<p>Give us a general feel for where you live. This will help others choose a match that
								best suits their critters. </p>
							</div>
						</div>
						<div className='radiobuttons row'>
							<div className='hmStyleSize offset-by-one three columns' ref='hmStyleSize'>
								<h5>Home:</h5>
								<label>
									<input 
									checked = {this.state.user.get('hmStyleSize')==='an apartment, condo, or townhouse'}
									onChange={this.editHmStyleSize}
									type='radio' 
									name='home' 
									className='radio' 
									value='an apartment, condo, or townhouse' />
								Apartment, Condo, Townhouse
								</label>
								<label>
									<input 
									checked = {this.state.user.get('hmStyleSize')==='a small house'}
									onChange={this.editHmStyleSize}
									type='radio' 
									name='home' 
									className='radio' 
									value='a small house' />
								Small house
								</label>
								<label>
									<input 
									checked = {this.state.user.get('hmStyleSize')==='a large house'}
									onChange={this.editHmStyleSize}
									type='radio' 
									name='home' 
									className='radio' 
									value='a large house' />
								Large house
								</label>
							</div>

							<div className='ydStyleSize offset-by-one three columns' ref='ydStyleSize'>
								<h5>Yard:</h5>
								<label>
									<input 
										checked = {this.state.user.get('ydStyleSize')==='no yard'} 
										onChange={this.editYdStyleSize}
										type='radio' 
										name='yard' 
										className='radio' 
										value='no yard' />
									No yard
								</label>
								<label>
									<input 
										checked = {this.state.user.get('ydStyleSize')==='a small courtyard'} 
										onChange={this.editYdStyleSize} 
										type='radio' 
										name='yard' 
										className='radio'
										value='a small courtyard' />
									Small courtyard
								</label>
								<label>
									<input 
										checked = {this.state.user.get('ydStyleSize')==='a small fenced yard'} 
										onChange={this.editYdStyleSize} 
										type='radio' 
										name='yard' 
										className='radio' 
										value='a small fenced yard' />
									Small fenced yard
								</label>
								<label>
									<input 
										checked = {this.state.user.get('ydStyleSize')==='a large fenced yard'} 
										onChange={this.editYdStyleSize}
										type='radio' 
										name='yard' 
										className='radio' 
										value='a large fenced yard' />
									Large fenced yard
								</label>
								<label>
									<input 
										checked = {this.state.user.get('ydStyleSize')==='an unfenced yard'} 
										onChange={this.editYdStyleSize} 
										type='radio' 
										name='yard' 
										className='radio' 
										value='an unfenced yard' />
									Unfenced yard
								</label>
							</div>

							<div className='devEnviron offset-by-one three  columns' ref='devEnviron'>
								<h5>Area:</h5>
								<label>
									<input 
										checked = {this.state.user.get('devEnviron')==='city'} 
										onChange={this.editDevEnivron} 
										type='radio' 
										name='dev-env' 
										className='radio' 
										value='city' />
									City
								</label>
								<label>
									<input 
									checked = {this.state.user.get('devEnviron')==='suburbs'} 
									onChange={this.editDevEnivron} 
									type='radio' 
									name='dev-env' 
									className='radio' 
									value='suburbs' />
								Suburbs
								</label>
								<label>
									<input 
										checked = {this.state.user.get('devEnviron')==='country'} 
										onChange={this.editDevEnivron} 
										type='radio' 
										name='dev-env' 
										className='radio' 
										value='country' />
									Country
								</label>
							</div>
						</div>
						
						<div className='buttonrow row'>
							<div className='offset-by-eight four columns'>
								<button className="button-primary" type='submit'> Save and go to Critters </button>
							</div>
						</div>
					</form>
				</div>
			</section>
		);
	},
	_uploadPhoto: function(e) {
		filepicker.pick(
			{
				mimetype: 'image/*',
				container: 'window',
				services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP', 'DROPBOX', 'IMGUR', 'INSTAGRAM', 'FLICKR', 'IMAGE_SEARCH', 'URL', 'WEBCAM']
			},
			(Blob) => {	
				this.setState({
					photo: Blob.url
				});
				this.state.user.save({photo: Blob.url});
			}
	);},
	makeProfile: function(e) {
		e.preventDefault();
		var hmStyleSize = this.refs.hmStyleSize.querySelector('input:checked') ?
			this.refs.hmStyleSize.querySelector('input:checked').value 
			: this.state.user.get('hmStyleSize');
		var ydStyleSize = this.refs.ydStyleSize.querySelector('input:checked') ? this.refs.ydStyleSize.querySelector('input:checked').value : this.state.user.get('ydStyleSize');
		var devEnviron = this.refs.devEnviron.querySelector('input:checked') ? this.refs.devEnviron.querySelector('input:checked').value : this.state.user.get('devEnviron');

		user.save(
			{
				briefBio:this.refs.sitterbio.value,
				hmStyleSize: hmStyleSize,
				ydStyleSize: ydStyleSize,
				devEnviron: devEnviron,
				photo: this.refs.photo.value
			},
			{
				success: ()=>{browserHistory.push('/critters');},
				error: ()=>{console.log('ERROR: makeProfile did not work. Bugger!');}}
		);
	},
	editDevEnivron:function(e) {//i want default to happen. 
		//change the value like i do an object:
		//either {key: newvalue} OR ('key', newvalue)
		this.state.user.set('devEnviron', e.target.value);
	},
	editHmStyleSize:function(e) {
		console.log(e.target.value);
		this.state.user.set('hmStyleSize', e.target.value);
	},
	editYdStyleSize:function(e) {
		console.log(e.target.value);
		this.state.user.set('ydStyleSize', e.target.value);
	}
});
