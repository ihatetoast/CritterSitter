import Backbone from 'backbone';
import UserModel from './../models/user.js';

const UsersCollection = Backbone.Collection.extend({
	model: UserModel,
	url: '/api/v1/user'
});

export default new UsersCollection();