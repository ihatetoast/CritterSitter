import React from 'react';
import {Link} from 'react-router';
import user from '../../models/user';//this is a session, katy. ooooh. aaaah.
import Critter from '../../models/Critter';

// import Crittes from './../../collections/CrittersCollection';



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
		this.state.user.on('change', this._showDash);
	},
	componentWillUnmount: function(){
		this.state.user.off('change', this._showDash);
	},
	_showDash: function(){
		this.setState({user:user});
	},
	render: function() {
		
		return (
			<section className='page-register'>
				<div className='container'>
				<h2>Sitter's Dashboard</h2>
						<div className='row'>
							<div className='one-half column'>
								<div className='welcomesitter'>
									<h5>Hello, {this.state.user.get('firstName')}!</h5>
								</div>
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
								<p>Your bio: </p>
								<div>{this.state.user.get('briefBio')}</div>
							</div>
						</div>




						<div className='buttonrow row'>
							<div className='offset-by-eight four columns'>
								<button className="button-primary" type='submit'>
									<Link to='/profile' >Edit profile </Link>
								</button>
							</div>
						</div>
				</div>
			</section>);
	}
	}
);

		