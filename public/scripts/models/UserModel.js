//FE models require Backbone
import Backbone from 'backbone';


const UserModel = Backbone.Model.extend({
	defaults: {
		firstName: '',
		lastName: '',
		email: '',
		photo: '',
		briefBio:'None given',
		hmStyleSize:'None given',
		ydStyleSize:'None given',
		devEnviron:'None given',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	urlRoot: '/api/v1/User',
	idAttribute: 'id'
});
//NOT instantiated. 
export default UserModel;

