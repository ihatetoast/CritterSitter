import React from 'react';
import Critter from '../../models/Critter';
import {browserHistory} from 'react-router';

//make this a subcom just for the form
//fetch a critter, if not there, make one. 
//pass fetch or newly made

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			//instatiated
			critter: new Critter()
		};
	},
	render: function() {
		return (
			<section>
				<div>
					<form onSubmit={this.makeCritter} ><h2>My Critters</h2>	
						<div>
							<p>How many critters do you have?</p>
							<input type='number' min="1" max="10" ref='number' />
						</div>
						<div ref='species'>
							What type of pet or pets do you have? Check all that apply:
							<label><input type='checkbox' className='chbx' value='dog' />dog</label>
							<label><input type='checkbox' className='chbx' value='cat' />cat</label>
							<label><input type='checkbox' className='chbx' value='bird' />bird</label>
							<label><input type='checkbox' className='chbx' value='rabbit' />rabbit</label>
							<label><input type='checkbox' className='chbx' value='rodent' />rodent</label>
							<label><input type='checkbox' className='chbx' value='reptile' />reptile</label>
							<label><input type='checkbox' className='chbx' value='crustacean' />crustacean</label>
							<p>If your pet's species is not listed, please enter it below:</p>
							<input type='text' placeholder='Other' ref='otherSpecies' />
						</div>
						<div>
						<p>Please take a moment to tell us a little bit more about your critters:</p>
						<textarea placeholder='limit 500 characters' ref='critterBio' name="critterBio" cols='70' rows='20'></textarea>
						</div>
						<button className="button-primary" type='submit'> Save </button>
					</form>
				</div>
			</section>
		);
	}
	// makeCritter: function(e) {
	// 	e.preventDefault();
	// 	var number = this.refs.number ?
	// 	var species = this.refs.species.querySelector('input:checked') ? this.refs.species.querySelector('input:checked').value : this.state.user.get('species');
	// 	var otherSpecies =
	// 	var critterbio =
	// 	this.state.critter.save({
	// 		critterBio:this.refs.critterBio.value,
	// 		species: this.refs.species.querySelector('input:checked').value,
	// 		number: this.refs.number.value,
	// 		otherSpecies: this.refs.other.value
	// 	},{
	// 		success: ()=>{
	// 			console.log('SUCCESS: makeCritter edited/changed');
	// 			browserHistory.push('/browse')
	// 		}
	// 	},{
	// 		error: ()=>{
	// 			console.log('ERROR: critter not edited');
	// 	}}
});







