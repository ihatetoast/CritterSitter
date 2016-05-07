import React from 'react';
// import Navigation from './Navigation';
import Banner from './Pages/subcomponents/Banner';
// import Footer from './footer'; 

export default React.createClass({
	render: function() {
		return (
			<main>
				{/*<Navigation />*/}
				<Banner />
				{this.props.children}
				{/*<Footer />*/}
			</main>
		);
	}
});