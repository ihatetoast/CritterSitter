// THIS SUBCOMPONENT GIVES THE DETAILS OF THE SITTER AND THE CRITTER.
// CLICKING "MESSAGE ME" SENDS THE LOGGED-IN USER TO THE MESSAGE PAGE (<MessageToSitter />)

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	
	render: function() {
		return (
			<section>
				<div>
					{/*Below will need function to show only last initial*/}
					<p><span>{this.props.firstName}</span><span id='lastNameInitial'>{this.props.lastName}</span> lives in 
					<span> {this.props.home}</span> with <span>{this.props.yard}</span> in the<span> {this.props.environment}</span>  
					with <span>{this.props.number}</span> critters/s (<span>{this.props.species}</span>, <span>{this.props.other}</span>).</p>
				</div>
				<div>
					<h6>About Sitter:</h6>
					<div>{this.props.sitterBio}</div>
					<h6>About Critter/s:</h6>
					<div>{this.props.critterBio}</div>
				</div>
				<div className='indivbutton'>
					<Link to={`/browse/${this.props.id}/message`}>Message me</Link>
				</div>
			</section>
		);
	}
});


