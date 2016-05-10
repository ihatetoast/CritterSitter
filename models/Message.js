require('./User');
module.exports = bookshelf.model('Message', {
    tableName: 'messages',
    hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
    //pull related data
    recipient: function(){
    	return this.belongsTo('User','recipientId');
    },
    sender: function(){
    	return this.belongsTo('User','senderId');
    }
});