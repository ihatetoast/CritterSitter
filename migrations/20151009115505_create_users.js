exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('firstName').notNull();
		t.string('lastName').notNull();
		t.string('email').notNull();
		t.string('briefBio', 500).nullable();
		t.string('hmStyleSize').nullable();
		t.string('ydStyleSize').nullable();
		t.string('devEnviron').nullable();
		t.string('photo').nullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
