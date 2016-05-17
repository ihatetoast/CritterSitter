import React from 'react';
import {Link, browserHistory} from 'react-router';
import user from '../models/user';
import $ from 'jquery';



export default React.createClass({

    testForCompleteFields: function(userModel){
    //fcn to see if the user has just registered/auth or has completed the profile page
        const fields = ['ydStyleSize', 'hmStyleSize', 'devEnviron', 'briefBio'];
        const fieldsAreComplete = true;

        fields.forEach(function(field){
        if (userModel.get(field) === null ) { 
            fieldsAreComplete = false;
        }
    });
        return fieldsAreComplete;
    },
//unauthorized users will see no links below banner, just top right
    unauthNavJSX: function(){
    console.log('the user is NOT logged in. REGISTER, SIGN IN at top right.');
        return (
            <div className="navdiv">
            </div>);
    },

    navJSX: function(){
        return (
        <div className="navdiv">
            <Link className="nav-link" to='/browse'>Browse</Link>
            <Link className="nav-link" to='/critters'>Edit Critters</Link>
            <Link className="nav-link" to='/profile'>Edit Profile</Link>
            <Link className="nav-link" to='/messages'>Messages</Link> 
            {/*<Link className="nav-link" to={'/browse/:recipientId/message'}></Link>*/}
        </div>);
  },

    showNavBtns: function(user){
    // if user is NOT authenticated, 
    if(!user.get('id') ) {
        return unauthNavJSX();
    }
    // test to see if user has completed the fields
    if( this.testForCompleteFields(user) === true ) {
      // if fields ARE complete, return longer navJSX 
      return this.navJSX();
    } else {
      // else, return shortNavJSX 
      return this.shortNavJSX();
    }

  },

  render: function(){
    console.log(this.state.user.toJSON()); 
    return (
      <div className="navdiv"> 
        {this.showNavBtns( this.state.user )}
      </div>
    );
  }
});