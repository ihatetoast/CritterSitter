import React from 'react';
import Critter from '../../models/Critter';
import {browserHistory} from 'react-router';
import Critters from '../../collections/CrittersCollection';
import user from '../../models/user';
// import UserModel from '../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user:user,
			critter: new Critter()
		};
	},
	componentDidMount: function(){
		console.log('session id: ',this.state.user.id);
		console.log('this critter\'s id: ', this.state['critter']);
		this.state.critter.on('change', this._critterDetails);
		Critters.fetch(
		{
			//listening to a model and fetching from a collection
			//when the data comes back our model doesn't know that it came back
			//i've checked the network response and saw the array of objs.
			// success(critters)<=an array i'll get back.
			success:(critters)=>{
				console.log('SUCCESS: critters', critters.toJSON()[0]);
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
		console.log('render: critters', this.state.critter);
		return (
			<section>
				<div>
					<form onSubmit={this.makeCritter} ><h2>My Critters</h2>	
						<div ref='species'>
							What type of pet or pets do you have? Check all that apply:
							<label>
								<input
								checked = {this.state.checked}
								onChange={this.editSpecies}
								type='checkbox'
								className='chbx'
								value='dog' />
								dog
							</label>
							<label>
								<input
									checked = {this.state.checked}
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx' 
									value='cat'/>
								cat
							</label>
							<label>
								<input 
									checked = {this.state.checked}
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx'  
									value='bird'/>
								bird
							</label>
							<label>
								<input
									checked = {this.state.checked}
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx' 
									value='rabbit'/>
								rabbit
							</label>
							<label>
								<input 
									checked = {this.state.checked}
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx'  
									value='rodent'/>
								rodent
							</label>
							<label>
								<input 
									checked = {this.state.checked}
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx' 
									value='reptile'/>
								reptile
							</label>
							<label>
								<input 
									checked = {this.state.checked}
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx'  
									value='crustacean'/>
								crustacean
							</label>
						</div>

						<div>
							<p>If your pet's species is not listed, please enter it below:</p>
							<input 
								value={this.state.critter.get('otherSpecies')}
								onChange={this.state.critter.handleOtherSpeciesChange}
								type='text' 
								placeholder='Other' 
								ref='otherSpecies' />
						</div>
						<div>
							<p>How many critters do you have?</p>
							<input 
								value={this.state.critter.get('number')}
								type='number' 
								min="1" 
								max="20" 
								ref='number' />
						</div>

						<div>
							<p>Please take a moment to tell us a little bit more about your critters:</p>
							<textarea 
								placeholder='limit 500 characters' 
								ref='critterBio' 
								name="critterBio" 
								cols='70' 
								rows='20'
								value={this.state.critter.get('critterBio')}/>
						</div>
						<div>
							<button className="button-primary" type='submit'> Save </button>
						</div>
					</form>
				</div>
			</section>
		);
	},
	makeCritter: function(e) {
		var number = this.refs.number ? this.refs.number.value : this.state.critter.get('number');
		var species = this.refs.species.querySelector('input:checked') ? this.refs.species.querySelector('input:checked').value : this.state.critter.get('species');
		var otherSpecies = this.refs.otherSpecies ? this.refs.otherSpecies.value : this.state.critter.get('otherSpecies');
		
		console.log('makeCritter: critters', number, species, otherSpecies);

		this.state.critter.save({
			critterBio:this.refs.critterBio.value,
			species: species,
			number: number,
			otherSpecies: otherSpecies
		},
			{
			success: ()=>{
				console.log('SUCCESS: makeCritter edited/changed');
				browserHistory.push('/browse');
			},
			error: ()=>{
				console.log('ERROR: critter not edited');
			}
		});
	},
	editSpecies: function(e){
		console.log('editSpecies: e.target.value:', e.target.value);
		this.state.critter.set('species', e.target.checked);
	},
	handleOtherSpeciesChange: function(e){
		console.log('handleOtherSpeciesChange: e.target.value:', e.target.value);
		this.state.critter.set('otherSpecies', e.target.value);
	}
});

