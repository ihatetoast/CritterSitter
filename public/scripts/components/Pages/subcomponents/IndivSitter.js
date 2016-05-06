import React from 'react';


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
			</section>
		);
	}
});

		