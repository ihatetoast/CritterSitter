exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('firstName').notNull();
		t.string('lastName').notNull();
		t.string('photo').nullable();
		t.string('email').notNull();
		t.string('mobile').notNull();
		t.text('briefBio').nullable();
		t.string('hmStyleSize').notNull();
		t.string('ydStyleSize').notNull();
		t.string('devEnviron').notNull();

		t.integer('messageId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('messages')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
