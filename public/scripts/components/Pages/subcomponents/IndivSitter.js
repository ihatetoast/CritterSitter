// THIS SUBCOMPONENT GIVES THE DETAILS OF THE SITTER AND THE CRITTER.
// CLICKING "MESSAGE ME" SENDS THE LOGGED-IN USER TO THE MESSAGE PAGE (<MessageToSitter />)

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	
	render: function() {
		return (
			<section className='offset-by-two eight columns'>
				<div>
					<h4>About {this.props.firstName}:</h4>
					<div className="photo"><img src={this.props.photo} width='120' height='auto'/></div>
					{/*Below will need function to show only last initial*/}
					<p><span className='names'>{this.props.firstName}</span><span id='lastNameInitial'>{this.props.lastName}</span> lives in 
					<span> {this.props.hmStyleSize}</span> with <span>{this.props.ydStyleSize}</span> in the<span> {this.props.devEnviron}</span>  
					with <span>{this.props.number}</span> critters/s (<span>{this.props.species}</span>, <span>{this.props.other}</span>).</p>
				</div>
				<div>
					<div>{this.props.briefBio}</div>
					<h4>About {this.props.firstName}'s Critters:</h4>
					<div className="critterPhoto">
						<img src={this.props.critterPhoto} width="350" height='auto'/>
					</div>
					<div>{this.props.critterBio}</div>
				</div>
				<div >
					<button className='msgSitter'>
						<Link 
							to={`/browse/${this.props.id}/message`}>
						Message {this.props.firstName}
						</Link>
					</button>
				</div>
			</section>
		);
	}
});


