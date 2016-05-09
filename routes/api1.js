let express = require('express');
let router = express.Router();
let path = require('path');
//catch-all to let bookshelf take care of everything
//from / on.
// look at ref.body and store it
let bookshelfApi=require('bookshelf-api')({
	path: path.join(__dirname, '..','models')
});
let loggedIn = require('../lib/middleware/logged-in');


//****************************************************************//
//   BELOW (router.post) ARE TO LOCK IN THE LOGGED-IN USER'S ID   //
//   so that the critter and the message are associated with the  //
//   logged-in user:                                              //
//                          									  //
//   left side varies and matches foreign id                      //
//   right side stays the same because it means the logged user   //
//   req.body.someId = req.user.id 								  //
//****************************************************************//
router.post(
	//end point
	'/critter',
	loggedIn,
	function(req, res, next){
		// matches BE column in table = logged in user
		req.body.userId = req.user.id;
		next();
	},

	bookshelfApi
);

router.post(
	//end point
	'/message',
	loggedIn,
	function(req, res, next){
		req.body.senderId = req.user.id;
		next();
	},

	bookshelfApi
);

router.use('/',
	loggedIn, 
	bookshelfApi
);

module.exports = router;
