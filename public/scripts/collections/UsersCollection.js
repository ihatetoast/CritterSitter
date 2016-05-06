import Backbone from 'backbone';
import User from './../models/UserModel.js';

const UsersCollection = Backbone.Collection.extend({
	model: User,
	url: '/api/v1/user'
});


export default new UsersCollection();