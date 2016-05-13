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
		Sitters.on('update change', this._browseSetState);
		Sitters.fetch({
			data: {
				//'critter' here is the function 'critter' in BE model
				//when i use withRelated although sitter is model, the critter is just and object.
				withRelated: ['critter']
			}
		});
	},
	componentWillUnmount: function(){
		this.Sitters.on('update change', this._browseSetState);
	},
	_browseSetState: function(){
		this.setState({Sitters:Sitters});
	},
	render: function() {
		let listOfSitters = this.state.Sitters.map((sitterval,i,arr)=>{
			return(
				<IndivSitter
					key = {sitterval.get('id')}
					id = {sitterval.get('id')}
					
					firstName = {sitterval.get('firstName')}
					lastName = {sitterval.get('lastName')}
					briefBio = {sitterval.get('briefBio')}
					photo  = {sitterval.get('photo')}
					hmStyleSize = {sitterval.get('hmStyleSize')}
					ydStyleSize = {sitterval.get('ydStyleSize')}
					devEnviron = {sitterval.get('devEnviron')}
					//sitterval gives a collection of models. get() is used
					//with arrays' values, so now i need ('critter').something
					number = {sitterval.get('critter').number}
					species = {sitterval.get('critter').species}
					other = {sitterval.get('critter').otherSpecies}
					critterBio = {sitterval.get('critter').critterBio}
					critterPhoto={sitterval.get('critter').critterPhoto}/>
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
		