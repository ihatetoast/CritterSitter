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



router.post(
	//end point
	'/critter',
	loggedIn,
	function(req, res, next){
		console.log('foreign key connection working');
		req.body.userId = req.user.id;
		next();
	},
	bookshelfApi
);

router.use('/',
	loggedIn, 
	bookshelfApi
);

module.exports = router;
