module.exports = bookshelf.model('Critter', {
    tableName: 'critters',
    hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});