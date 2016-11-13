
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import $ from 'jquery';
import filepicker from 'filepicker-js';
// import user from './models/user';

import App from './components/App';
import Register from './components/Register';
import Login from './components/Login';


import Home from './components/Pages/Home';
import Profile from './components/Pages/Profile';
import Critters from './components/Pages/Critters';
import Browse from './components/Pages/Browse';
import MessageToSitter from './components/Pages/MessageToSitter';
import MyMessages from './components/Pages/MyMessages';
import Conversation from './components/Pages/Conversation';
import Dashboard from './components/Pages/Dashboard';
import Delete from './components/Pages/Delete';


filepicker.setKey('AifGt857oRLCoRsu9sfJfz');
	$.ajaxSetup({
		headers: {
			Accept: 'application/JSON'
		}
	});


const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />

			<Route path="/home" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/profile" component={Profile} />
			<Route path="/critters" component={Critters} />
			<Route path="/browse" component={Browse} />
			<Route path="/messages/:recipientId/message" component={Conversation} />
			<Route path="/browse/:recipientId/message" component={MessageToSitter} />
			<Route path="/messages" component={MyMessages} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/delete" component={Delete} />

		</Route>
	</Router>
);
			// <Route path="/profile" component={Profile} onEnter={requireAuth}/>
			// <Route path="/critters" component={Critters} onEnter={requireAuth}/>
			// <Route path="/browse" component={Browse} onEnter={requireAuth}/>
			// <Route path="/message" component={MessageToSitter} onEnter={requireAuth}/>
			// <Route path="/messages" component={MyMessages} onEnter={requireAuth}/>

ReactDOM.render(router, document.getElementById('container'));
