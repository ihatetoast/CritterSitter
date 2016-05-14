//page exists only to have a place for login and register. 
import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section className='page-section-home'>
	        	<h3>Welcome to Critter Sitter</h3>
		        <div className='homediv offset-by-three six columns'>
	    			<img src='./../../../images/stan.jpg'/>
	    			<div className='photocredit'>
	    				<a href='http://www.christinajenkinsphotography.com/' target='_blank'>Christina Jenkins Photography</a>
	    			</div>
		   
	        		<div className='hometext'>
	        			<p className='homepara'><span className='critterSitter'>Critter Sitter</span> connects pet lovers willing to pet sit. Having a beloved pet should 
									not keep you from travelling. travelling should not stop you from adopting a pet. </p>

								<p className='homepara'>Professional pet sitters and boarding kennels are expensive. Friends and family cannot 
									always help out.  We can!</p>

								<p className='homepara'>Register or login and find a good match. Reach out, connect, have a playdate or two, 
									and know that when you are away, your beloved pet is in good hands with a critter sitter.</p>
	        		</div>
				</div>
			</section>
		);
	}
});

