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
			<IndexRoute component={Home}/>
			<Route path="/contact" component={Contact} />
			<Route path="/login" component={Login}/>
			<Route path="/add-user" component={Admin}/>
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('container'));
