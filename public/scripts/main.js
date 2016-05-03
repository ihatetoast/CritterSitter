import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';



//build end points
const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Home}>
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Route>
	</Router>
);


ReactDOM.render(router, document.getElementById('container'));
