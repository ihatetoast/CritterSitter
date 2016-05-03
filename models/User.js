require('./Authentication');
require('./Message');

module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		this.hasMany('Authentication', 'userId');
	},
	//will allow me to keep track of messages 
	messages: function(){
		return this.hasMany('Message', 'userId');
	}
});