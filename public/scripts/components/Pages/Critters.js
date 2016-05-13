import React from 'react';
import Critter from '../../models/Critter';
import {browserHistory} from 'react-router';
import Critters from '../../collections/CrittersCollection';
import user from '../../models/user';
import filepicker from 'filepicker-js';

// import UserModel from '../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user:user,
			critter: new Critter(),
			critterPhoto:''
		};
	},
	componentDidMount: function(){
		// console.log('session id: ',this.state.user.id);
		// console.log('this critter\'s id: ', this.state['critter']);
		this.state.critter.on('change', this._critterDetails);
		Critters.fetch(
		{
			//listening to a model and fetching from a collection
			//when the data comes back our model doesn't know that it came back
			//i've checked the network response and saw the array of objs.
			// success(critters)<=an array i'll get back.
			success:(critters)=>{
				this.state.critter.set(critters.toJSON()[0]);
			},
			error:(errArg)=>{
				console.log('ERROR: critter did not fetch and update model');
			},
			data: 
				{
					where: {userId: this.state.user['id']}
				}
		});
	},
	componentWillUnmount: function(){
		this.state.critter.off('change', this._critterDetails);
	},
	_critterDetails: function(){
		this.setState({critter:this.state.critter});
	},
	render: function() {
		return (
			<section>
				<div>
					<form onSubmit={this.makeCritter} ><h2>My Critters</h2>	
							<div>
							<p>How many critters do you have?</p>
							<input 
								value={this.state.critter.get('number')}
								onChange={this.handleNumber}
								type='number' 
								min="1" 
								max="20" 
								ref='number' />
						</div>
						<div>
							<p>List the types of critters you have:</p>
							<input 
								value={this.state.critter.get('otherSpecies')}
								onChange={this.handleOtherSpecies}
								type='text' 
								placeholder='dog, cat, goat, hamster ...' 
								ref='otherSpecies' />
						</div>
						<div>
							<p>Please take a moment to tell us a little bit more about your critters:</p>
							<textarea 
								value={this.state.critter.get('critterBio')}
								onChange ={this.handleCritterBio}
								placeholder='limit 500 characters' 
								ref='critterBio' 
								name='critterBio' 
								cols='80' 
								rows='40'/>
						</div>
						<div className="photo-container">
							<h5> Upload a photo</h5>
							<div>
								<button	type = 'button' onClick = {this._uploadCritterPhoto}>Upload a photo</button>
							</div>
							<div>
								<img src={this.state.critterPhoto} width='120' height='auto' ref='critterPhoto'/>
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
	_uploadCritterPhoto: function() {
		filepicker.pick(
			{
				mimetype: 'image/*',
				container: 'window',
				services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP', 'DROPBOX', 'IMGUR', 'INSTAGRAM', 'FLICKR']
			},
			(Blob) => {
				this.setState({
					critterPhoto: Blob.url
				});
				this.state.critter.save({critterPhoto: Blob.url});}
		);},
	makeCritter: function(e) {
		e.preventDefault();
		// var critterBio = this.refs.critterBio ? this.refs.critterBio.value : this.state.critter.get('critterBio');
		// var number = this.refs.number ? this.refs.number.value : this.state.critter.get('number');
		// var otherSpecies = this.refs.otherSpecies ? this.refs.otherSpecies.value : this.state.critter.get('otherSpecies');
		

		// this.state.critter.save({
		// 	critterBio: critterBio,
		// 	number: number,
		// 	otherSpecies: otherSpecies
		// },
			this.state.critter.save({
				critterBio: this.refs.critterBio.value,
				number: this.refs.number.value,
				otherSpecies: this.refs.otherSpecies.value,
				critterPhoto: this.refs.critterPhoto.value
		},
			{
			success: ()=>{
				browserHistory.push('/browse');
			},
			error: ()=>{
				console.log('ERROR: critter not edited');
			}
		});
	},
	handleCritterBio: function(e){
		this.state.critter.set('critterBio', e.target.value);
	},
	handleOtherSpecies: function(e){
		this.state.critter.set('otherSpecies', e.target.value);
	},
	handleNumber: function(e){
		this.state.critter.set('number', e.target.value);
	}
});