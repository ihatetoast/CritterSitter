import React from 'react';
import Sitters from './../../collections/UsersCollection';
import IndivSitter from './subcomponents/IndivSitter.js';

// Warning: setState(...): Can only update a mounted or mounting component. 
// This usually means you called setState() on an unmounted component. 
// This is a no-op. Please check the code for the Browse component.


// google withrelated
export default React.createClass({
	getInitialState: function(){
		return{Sitters: Sitters};
	},
	componentDidMount: function(){
		Sitters.on('update', this.updateSitters);
		Sitters.fetch({
			data: {
				//'critter' here is the function 'critter' in BE model
				withRelated: ['critter']
			}
		});
	},
	updateSitters: function(){
		this.setState({Sitters: Sitters});
	},
	render: function() {
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
					environment = {sitterval.get('devEnviron')}/>
				);
		});
		return (
			<section>
				<div>
					{listOfSitters}
				</div>
			</section>
			);
	}
});

		