import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Critters from './components/Pages/Critters';
import Browse from './components/Pages/Browse';
import MessageToSitter from './components/Pages/MessageToSitter';
import MyMessages from './components/Pages/MyMessages';




//build end points
const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Home}/>
		<Route path="/login" component={Login} />
		<Route path="/register" component={Register} />
		<Route path="/mycritters" component={Critters} />
		<Route path="/sitters" component={Browse} />
		<Route path="/message" component={MessageToSitter} />
		<Route path="/messages" component={MyMessages} />
	</Router>
);


ReactDOM.render(router, document.getElementById('container'));
