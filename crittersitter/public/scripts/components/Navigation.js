import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import {browserHistory} from 'react-router';


export default React.createClass({
	
	render: function() {
		return 
		(<nav>
			<Link to="/stories" ></Link>
			<Link className="nav-links" to="/About">About</Link>
			<Link className="nav-links" to="/Admin">Login</Link>
		</nav>);
	}
});

