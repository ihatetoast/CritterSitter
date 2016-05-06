import React from 'react';


export default React.createClass({
	render: function() {
		return (
			<section>
				<div>
					{/*Below will need function to show only last initial*/}
					<p><span>{this.props.firstName}</span><span id='lastNameInitial'>{this.props.lastName}</span> lives in a 
					<span>{this.props.hmStyleSize}</span> with a <span>{this.props.yard}</span> in the<span>{this.props.devEnviron}</span> 
					with <span>{this.props.number}</span> of critters/s (<span>{this.props.species}</span>, <span>{this.props.otherSpecies}</span>).</p>
				</div>
				<div>
					<h6>About Sitter:</h6>
					<div>{this.props.briefBio}</div>
					<h6>About Critter/s:</h6>
					<div>{this.props.critterbio}</div>
				</div>
			</section>
		);
	}
});

		