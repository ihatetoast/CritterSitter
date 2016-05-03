//page exists only to have a place for login and register. 
import React from 'react';

import Navigation from './../../components/Navigation';




export default React.createClass({
	render: function() {
		return (
			<section>
				<Navigation />
        		<h1>HOME: Critter Sitter</h1>
        		<p>this page should show only login and register links</p>
        		<div>div for left photo</div>
        		<div>div for center text</div>
        		<div>div for right photo</div>


			</section>
		);
	}
});

