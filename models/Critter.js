module.exports = bookshelf.model('Critter', {
    tableName: 'products',
    hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});