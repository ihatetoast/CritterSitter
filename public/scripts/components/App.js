import React from 'react';
// import Navigation from './Navigation';
import Banner from './Pages/subcomponents/Banner';
// import Footer from './footer'; 

export default React.createClass({
	render: function() {
		return (
			<main>
				<Banner />
				{this.props.children}
			</main>
		);
	}
});