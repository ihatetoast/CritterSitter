import React from 'react';
import IndivMessage from './subcomponents/IndivMessage';

export default React.createClass({
	render: function() {
		return (
			<section>
			<p>NAVIGATION: i only want to see home, logout, browse, my profile</p>
				<h1>My messages</h1>
				<div>
					<IndivMessage />
				</div>
			</section>
		);
	}
});

//ajax fetch request