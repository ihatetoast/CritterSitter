import React from 'react';
import user from '../../models/user';//this is a session, katy. ooooh. aaaah.
import {browserHistory} from 'react-router';

import filepicker from 'filepicker-js';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user: user
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
			<section className='page-register container'>
				<div>
					<form onSubmit={this.makeProfile} ><h2>Profile</h2>	
						<div ref='hmStyleSize'>
							<p>Where do you live?</p>
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
						<div ref='ydStyleSize'>
							<p>What is your ydStyleSize like?</p>
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
						<div ref='devEnviron'>
							<p>What type of developed environment:</p>
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
						<div>
							<p>Please take a moment to tell us a little bit more about yourself:</p>
							<textarea 
								placeholder='limit 500 characters' 
								ref='sitterbio' 
								name="sitterbio" 
								cols='80' 
								rows='40' 
								defaultValue={this.state.user.get('briefBio')}/>
						</div>
						<div className="photo-container">
							<h5> Upload a photo</h5>
							<div>
								<button	type = 'button' onClick = {this._uploadPhoto}>Upload a photo</button>
							</div>
							<div>
								<img src={this.state.photo} width='225' height='100%' ref='photo'/>
							</div>
						</div>
						<div>
								<button className="button-primary" type='submit'> Save </button>
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
				services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP', 'DROPBOX', 'IMGUR', 'INSTAGRAM', 'FLICKR']
			},
			(Blob) => {	this.state.user.save({photo: Blob.url});}
	);},
	makeProfile: function(e) {
		e.preventDefault();
		var hmStyleSize = this.refs.hmStyleSize.querySelector('input:checked') ?
			this.refs.hmStyleSize.querySelector('input:checked').value 
			: this.state.user.get('hmStyleSize');
		var ydStyleSize = this.refs.ydStyleSize.querySelector('input:checked') ? this.refs.ydStyleSize.querySelector('input:checked').value : this.state.user.get('ydStyleSize');
		var devEnviron = this.refs.devEnviron.querySelector('input:checked') ? this.refs.devEnviron.querySelector('input:checked').value : this.state.user.get('devEnviron');

		user.save({
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
