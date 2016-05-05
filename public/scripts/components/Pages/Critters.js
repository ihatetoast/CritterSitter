import React from 'react';


export default React.createClass({
	render: function() {
		return (
			<section className='page-critters container'>
				<div>
					<form onSubmit={this.register} ><h1>My Critters</h1>	
						<div>
							<p>How many critters do you have?</p>
							<input type='number' ref='numberPets' />
						</div>
						<div>What type of pet or pets do you have? Check all that apply:
							<label><input type='checkbox' id='chbx' value='dog' />dog</label>
							<label><input type='checkbox' id='chbx' value='cat' />cat</label>
							<label><input type='checkbox' id='chbx' value='bird' />bird</label>
							<label><input type='checkbox' id='chbx' value='rabbit' />rabbit</label>
							<label><input type='checkbox' id='chbx' value='rodent' />rodent</label>
							<label><input type='checkbox' id='chbx' value='reptile' />reptile</label>
							<p>If your pet's species is not listed, please enter it below:</p>
							<input type='text' placeholder='Other' ref='other' />
						</div>
						<div>
						<p>Please take a moment to tell us a little bit more about your critters:</p>
						<textarea placeholder='limit 500 characters' name="critterbio" cols='70' rows='20'></textarea>
						</div>
						<button className="button-primary" type='submit'> Save </button>
					</form>
				</div>
			</section>
		);
	}
});