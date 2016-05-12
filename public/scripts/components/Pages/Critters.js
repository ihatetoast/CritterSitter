import React from 'react';
import Critter from '../../models/Critter';
import {browserHistory} from 'react-router';
// import user from '../../models/user';
// import UserModel from '../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			critter: new Critter()
			// user: user,
			// usermodel: new UserModel()
		};
	},
	componentDidMount: function(){
		console.log('componentDidMount: critters' );
		// console.log('this is the logged in user\'s id: ', this.state.user['id']);
		// console.log('Looking for the critter id: ', this.state.user['userId']);
		this.state.critter.on('change', () => {
			this.setState({
				critter: critter,
				// user:user,
				// usermodel: UserModel,
				data:{withRelated:['user', 'critter']}
			});
			console.log('Looking for the critter id: ', this.state.get['user'].id);
		});
	},
	// FROM BROWSE PAGE: 
	//componentDidMount: function(){//see MyMessages for notes		
	// 	Sitters.on('update', ()=>{
	// 		this.setState({Sitters: Sitters});
	// 	});
	// 	Sitters.fetch({
	// 		data: {
	// 			//'critter' here is the function 'critter' in BE model
	// 			//when i use withRelated although sitter is model, the critter is just and object.
	// 			withRelated: ['critter']
	// 		}
	// 	});
	// },
	render: function() {
		// console.log('render: critters');
		return (
			<section>
				<div>
					<form onSubmit={this.makeCritter} ><h2>My Critters</h2>	
						<div>
							<p>How many critters do you have?</p>
							<input 
								defaultValue={this.state.critter.get('number')}
								type='number' 
								min="1" 
								max="20" 
								ref='number' />
						</div>

						<div ref='species'>
							What type of pet or pets do you have? Check all that apply:
							<label>
								<input
								onChange={this.editSpecies}
								type='checkbox'
								className='chbx' 
								value='dog' />
								dog
							</label>
							<label>
								<input
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx' 
									value='cat' />
								cat
							</label>
							<label>
								<input 
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx' 
									value='bird' />
								bird
							</label>
							<label>
								<input
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx' 
									value='rabbit' />
								rabbit
							</label>
							<label>
								<input 
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx' 
									value='rodent' />
								rodent
							</label>
							<label>
								<input 
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx' 
									value='reptile' />
								reptile
							</label>
							<label>
								<input 
									onChange={this.editSpecies}
									type='checkbox' 
									className='chbx' 
									value='crustacean' />
								crustacean
							</label>
						</div>

						<div>
							<p>If your pet's species is not listed, please enter it below:</p>
							<input 
								defaultValue={this.state.critter.get('otherSpecies')}
								// value={this.state.critter.value}
								onChange={this.state.critter.handleOtherSpeciesChange}
								type='text' 
								placeholder='Other' 
								ref='otherSpecies' />
						</div>

						<div>
							<p>Please take a moment to tell us a little bit more about your critters:</p>
							<textarea 
								placeholder='limit 500 characters' 
								ref='critterBio' 
								name="critterBio" 
								cols='70' 
								rows='20'
								defaultValue={this.state.critter.get('critterBio')}/>
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
		this.state.critter.set('species', e.target.value);
	},
	handleOtherSpeciesChange: function(e){
		console.log('handleOtherSpeciesChange: e.target.value:', e.target.value);
		this.state.critter.set('otherSpecies', e.target.value);
	}
});

