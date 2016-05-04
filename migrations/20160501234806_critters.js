exports.up = function(knex, Promise) {
	return knex.schema.createTable('critters', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.integer('number').unsigned().defaultTo(1);
		t.string('critterPhoto').nullable();
		t.string('species').notNull();
		t.string('otherSpecies').nullable();
		t.string('critterBio', 500).notNull();

		t.integer('userId')
            .unsigned()
            .notNull()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('critters');
};
