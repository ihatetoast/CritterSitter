import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="/contact" component={Contact} />
		</Route>
	</Router>
);

