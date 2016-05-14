// THIS SUBCOMPONENT GIVES THE DETAILS OF THE SITTER AND THE CRITTER.
// CLICKING "MESSAGE ME" SENDS THE LOGGED-IN USER TO THE MESSAGE PAGE (<MessageToSitter />)

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	
	render: function() {
		return (
			<div className='container'>
						
						<div className='row'>
							
							<div className='four columns'>
									<div><img src={this.props.photo} width='250' height='auto'/></div>
							</div>
									

							<div className='offset-by-two five columns'>
								<h3>About {this.props.firstName}:</h3>
								<div className='sitter-para1'>
									<p><span className='names'>{this.props.firstName}</span>lives in 
									<span> {this.props.hmStyleSize}</span> with <span>{this.props.ydStyleSize}</span> in the<span> {this.props.devEnviron}</span>  
									with <span>{this.props.number}</span> critters/s (<span>{this.props.other}</span>).</p>
								</div>

                <div className='sitter-para2'>
                  <h5>In {this.props.firstName}'s words:</h5>
                  <div>{this.props.briefBio}</div>
                </div>
              </div>
						</div>


						<div className='row'>
								<h4>About {this.props.firstName}'s Critters:</h4>
								<div className="critterPhoto">
									<img src={this.props.critterPhoto} width="350" height='auto'/>
								</div>
								<div>{this.props.critterBio}</div>
							</div>
							
							<div >
								<button>
									<Link
										className='msgSitter'
										to={`/browse/${this.props.id}/message`}>
									Message {this.props.firstName}
									</Link>
								</button>
							</div>
						</div>
									
		);
	}
});


