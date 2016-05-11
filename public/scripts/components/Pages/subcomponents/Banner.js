import React from 'react';
import Navigation from './../../Navigation';
import MiniNav from './../../MiniNav';


//Simple banner 
//Mini Nav should be at the top, small, floated right
//proper Navigation is below, centered and more prominent
export default React.createClass({
	render: function() {
		return (
			<section className='banner-section'>
				<MiniNav />
        		<div className='banner'>critter sitter</div>

        		<Navigation />
			</section>
		);
	}
});

