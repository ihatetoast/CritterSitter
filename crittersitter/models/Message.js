module.exports = bookshelf.model('Message', {
    tableName: 'messages',
    hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
    
});