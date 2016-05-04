import Backbone from 'backbone';
import MessageModel from './../models/Message.js';

const MessagesCollection = Backbone.Collection.extend({
	model: MessageModel,
	url: '/api/v1/Message'
});

export default new MessagesCollection();