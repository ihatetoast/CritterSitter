import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';




const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="/contact" component={Contact} />
			<Route path="/login" component={Login} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('container'));
