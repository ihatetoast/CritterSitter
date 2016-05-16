// THIS SUBCOMPONENT GIVES THE DETAILS OF THE SITTER AND THE CRITTER.
// CLICKING "MESSAGE ME" SENDS THE LOGGED-IN USER TO THE MESSAGE PAGE (<MessageToSitter />)

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	
	render: function() {
		return (
			<div className='indivSitter container'>
						
						<div className='row toprow'>
							<div className='one-half column'>
									<div>
										<img src={this.props.photo}/>
									</div>								
							</div>									
							<div className='one-half column'>
								<h3 className='about'>About {this.props.firstName}:</h3>
								<div className='sitter-para1'>
									<p><span className='names'>{this.props.firstName}</span>lives in 
									<span> {this.props.hmStyleSize} </span> with <span>{this.props.ydStyleSize}</span> in the <span> {this.props.devEnviron} </span>  
									with <span>{this.props.number}</span> critters/s (<span>{this.props.other}</span>).</p>
								</div>
                <div className='sitter-para2'>
                  <h5>In {this.props.firstName}'s words:</h5>
                  <div>{this.props.briefBio}</div>
                </div>
              </div>
						</div>


						<div className='row bottomrow'>
							<div className='one-half column'>
								<h5>{this.props.firstName}'s Critters:</h5>
								<div>
									<p className='critter-para'>{this.props.critterBio}</p>
								</div>
							</div>
							<div className='one-half column'>
								<div className="critterPhoto">
									<img src={this.props.critterPhoto}/>
								</div>
								<div className='buttondiv'>
                  <Link to={`/browse/${this.props.id}/message`}>
                  	<button className='msgSitter'>
                      Message {this.props.firstName}
                    </button>
                      </Link>
                 </div>
							</div>
						</div>
		</div>
									
		);
	}
});


