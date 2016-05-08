//page exists only to have a place for login and register. 
import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section>
	        	<h3>Welcome to Critter Sitter</h3>
		        <div className='homediv offset-by-three six columns'>
	    			<img src='./../../../images/stan.jpg'/>
	    			<div className='photocredit'>
	    				<a href='http://www.christinajenkinsphotography.com/' target='_blank'>Christina Jenkins Photography</a>
	    			</div>
		   
	        		<div className='hometext'>
	        			<p>Critter Sitter is an app that connects pet lovers
		        		willing to mutually pet sit. </p>
		        		<p>Register or login to browse
		        		other pet sitters. Reach out, connect, have a playdate or two,
		        		and know that when you travel, your beloved pet is in 
		        		good hands.</p>
	        		</div>
				</div>
			</section>
		);
	}
});

