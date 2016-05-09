import React from 'react';
import Sitters from './../../collections/UsersCollection';
import IndivSitter from './subcomponents/IndivSitter.js';



export default React.createClass({
	getInitialState: function(){
		return{Sitters: Sitters};
	},
	componentDidMount: function(){
		console.log('component did mount.');
		Sitters.on('update', this.updateSitters);
		Sitters.fetch({
			data: {
				//'critter' here is the function 'critter' in BE model
				//when i use withRelated although sitter is model, the critter is just and object.
				withRelated: ['critter']
			}
		});
	},
	updateSitters: function(){
		console.log('Sitters did update.');
		this.setState({Sitters: Sitters});
	},
	render: function() {
		console.log('render rendered in a blender.');
		const listOfSitters = this.state.Sitters.map((sitterval,i,arr)=>{
			return(
				<IndivSitter
					key = {sitterval.get('id')}
					id = {sitterval.get('id')}
					
					firstName = {sitterval.get('firstName')}
					lastName = {sitterval.get('lastName')}
					sitterBio = {sitterval.get('briefBio')}
					photo  = {sitterval.get('photo')}
					home = {sitterval.get('hmStyleSize')}
					yard = {sitterval.get('ydStyleSize')}
					environment = {sitterval.get('devEnviron')}
					//sitterval gives a collection of models. get() is used
					//with 
					number = {sitterval.get('critter').number}
					species = {sitterval.get('critter').species}
					other = {sitterval.get('critter').otherSpecies}
					critterBio = {sitterval.get('critter').critterBio}/>
				);
		});
		return (
			<section>
				<h2>Browse registered sitters:</h2>
				<div>
					{listOfSitters}
				</div>
			</section>
			);
	}
});


		