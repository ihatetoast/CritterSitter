import React from 'react';


export default React.createClass({
	getInitialState: function() {
		return {
			 errors: {},
			 //instatiated
			critter: new Critter
	}	;
      },
	render: function() {
		return (
			<section>
				<h1>Send a message</h1>
				<div>
				<p>Introduce yourself! Write a <span className='italSpan'>brief</span> message to the sitters
				and let them know a little about yourself and what you're looking for.
				<span className='boldSpan'>Be sure to include a way for them to reach you (email or mobile).</span></p>
				</div>
				<div>
					<form>

					</form>
				</div>

			</section>
		);
		}
	});