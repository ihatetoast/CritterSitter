import React from 'react';
import IndivMessage from './subcomponents/IndivMessage';

export default React.createClass({
	render: function() {
		return (
			<section>
				<h1>My messages</h1>
				<div>
					<IndivMessage />
				</div>
			</section>
		);
	}
});