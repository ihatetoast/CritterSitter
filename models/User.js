require('./Authentication');
require('./Message');
require('./Critter');

module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		this.hasMany('Authentication', 'userId');
	},
	//will allow me to keep track of messages 
	messages: function(){
		return this.hasMany('Message', 'recipientId');
	},
	//this below is what withRelated refers to when you read "critter"
	critter: function(){
    	return this.hasOne('Critter','userId');
    }
});