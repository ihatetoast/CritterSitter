//page exists only to have a place for login and register. 
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Navigation from './../components/Navigation';



export default React.createClass({
	render: function() {
		return (
			<section>
				<Navigation />
        		<h1>HOME: Critter Sitter</h1>

				{/*{this.props.children}*/}


			</section>
		);
	}
});
ReactDOM.render(router, document.getElementById('container'));
