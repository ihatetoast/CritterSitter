//v2 
//adding subcomp to style for <MyMessages /> page.

import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section className="page-delete">
				<div className='row'>
					<h2>OMG, you tried to delete.</h2>	
					<div className='offset-by-three six columns'>
						<img src={'./../../../images/jess.jpg'}/>
					</div>			
				</div>
				<div className='row'>
					<h2>It's like you're all "Doopty Doo! I wanna delete. I wanna put things on my head</h2>	
				</div>
				<div className='offset-by-three six columns'>
					<img src={'./../../../images/larner.jpeg'}/>
				</div>
			</section>
		);
	}
});


