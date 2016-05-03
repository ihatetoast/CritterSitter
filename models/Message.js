require('./User');
module.exports = bookshelf.model('Message', {
    tableName: 'messages',
    hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
    //pull related data
    messager: function(){
    	return this.belongsTo('User','userId');
    }
});