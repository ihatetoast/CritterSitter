import React from 'react';
import Sitters from './../../collections/UsersCollection';
import IndivSitter from './subcomponents/IndivSitter.js';


// for backbone, save handles both new and saving. if i have an existing model, just change
// 	the attributes by modelName.save({keythatexists: newbits})
// look this up as backbone

export default React.createClass({
	getInitialState: function(){
		return{
			Sitters: Sitters
		};
	},
	componentDidMount: function(){//see MyMessages for notes
		console.log('BROWSE component did mount.');
		
		Sitters.on('update', ()=>{
			console.log('Sitters did update.');
			this.setState({Sitters: Sitters});
		});
		Sitters.fetch({
			data: {
				//'critter' here is the function 'critter' in BE model
				//when i use withRelated although sitter is model, the critter is just and object.
				withRelated: ['critter']
			}
		});
	},
	render: function() {
		console.log('sitters rendered in a blender.');
		let listOfSitters = this.state.Sitters.map((sitterval,i,arr)=>{
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
					//with arrays' values, so now i need ('critter').something
					number = {sitterval.get('critter').number}
					species = {sitterval.get('critter').species}
					other = {sitterval.get('critter').otherSpecies}
					critterBio = {sitterval.get('critter').critterBio}/>
				);
		});
		return (
			<section>
				<h2>Browse registered sitters:</h2>
				<div >
					{listOfSitters}
				</div>
			</section>
		);
	}
});

// sitterval is the receipient's id because i went fro here
		