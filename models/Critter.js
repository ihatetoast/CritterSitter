module.exports = bookshelf.model('Critter', {
    tableName: 'critters',
    hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
    user: function(){
    	return this.belongsTo('User','userId');
    }

});