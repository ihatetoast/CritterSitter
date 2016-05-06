//FE models require Backbone
// import Backbone from 'backbone';
import User from './UserModel';


// const UserModel = Backbone.Model.extend({
// 	defaults: {
// 		firstName: '',
// 		lastName: '',
// 		email: '',
// 		photo: '',
// 		briefBio:'',
// 		hmStyleSize:'',
// 		ydStyleSize:'',
// 		devEnviron:'',
// 		createdAt: null,
// 		updatedAt: null,
// 		deletedAt: null
// 	},
// 	urlRoot: '/api/v1/User',
// 	idAttribute: 'id'
// });
// //instantiated. 
export default new User(window.user);






// duplicate this but do NOT instantiate it: UserModel; and save as UserModel.js
	