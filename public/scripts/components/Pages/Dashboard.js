import React from 'react';
import {Link} from 'react-router';
import user from '../../models/user';//this is a session, katy. ooooh. aaaah.
import Critter from '../../models/Critter';

import Critters from './../../collections/CrittersCollection';



// for backbone, save handles both new and saving. if i have an existing model, just change
// 	the attributes by modelName.save({keythatexists: newbits})
// look this up as backbone

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {},
			user: user,
			critter: new Critter()
		};
	},
	componentDidMount: function(){
		this.state.user.on('change update', this._showDash);
		this.state.critter.on('change', this._showDashCritter);
		Critters.fetch(
		{
			//listening to a model and fetching from a collection
			//when the data comes back our model doesn't know that it came back
			success:(critters)=>{
				this.state.critter.set(critters.toJSON()[0]);
			},
			error:(errArg)=>{
				console.log('ERROR: critter did not fetch and update model');
			},
			data: 
				{
					where: {userId: this.state.user['id']}
				}
		});
	},
	componentWillUnmount: function(){
		this.state.user.off('change update', this._showDash);
		this.state.critter.off('change update', this._showDashCritter);
	},
	_showDash: function(){
		this.setState({user:user});
	},
	_showDashCritter: function(){
		this.setState({critter:this.state.critter});
	},
	render: function() {
		return (
			<section className='page-register'>
				<div className='container'>
					<h2>Sitter&apos;s Dashboard</h2>
					<div className='welcomesitter row'>
						<h5>Welcome, {this.state.user.get('firstName')}!</h5>
					</div>
					<div className='sitterdashboard row'>
						<div className='one-half column'>
							<div className='welcomephoto'>
								<img src={this.state.user.get('photo')} />
							</div>
							<div>
								<p>We are excited to see that you are willing to host a critter or three or four in 
								your {this.state.user.get('hmStyleSize')} where they will scamper about (or not)
								in your {this.state.user.get('ydStyleSize')} in the lovely {this.state.user.get('devEnviron')}.</p>
							</div>
						</div>
						<div className='one-half column'>
							<p className='yourwords'>You in your words: </p>
							<div>{this.state.user.get('briefBio')}</div>
							<div className='buttonrow row'>
								<div className='offset-by-eight four columns'>
									<button className="button-primary" type='submit'>
										<Link to='/profile' >Edit profile </Link>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='critterdashboard row'>
						<div className='one-half column'>
							<div className='welcomephoto'>
								<img src={this.state.critter.get('critterPhoto')} />
							</div>
							<div>
								<p>Number of critters: {this.state.critter.get('number')}</p>
								<p>What type/s of critters: {this.state.critter.get('otherSpecies')}</p>
							</div>
						</div>
						<div className='one-half column'>
							<p className='yourwords'>Your critters in your words: </p>
							<div>{this.state.critter.get('critterBio')}</div>
							<div className='buttonrow row'>
								<div className='offset-by-eight four columns'>
									<button className="button-primary" type='submit'>
										<Link to='/critters' >Edit critters </Link>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>);
	}
	}
);

		
