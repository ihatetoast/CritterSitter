exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.string('emailTo').notNull();
        t.string('emailFrom').notNull();
        t.string('messageBody').notNull();

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('messages');
};