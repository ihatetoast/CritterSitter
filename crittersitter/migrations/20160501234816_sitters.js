exports.up = function(knex, Promise) {
	return knex.schema.createTable('sitters', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('firstName').notNull();
		t.string('lastName').notNull();
		t.string('userName').notNull();
		t.string('email').notNull();
		t.integer('numAdults').unsigned().defaultTo(1);
		t.integer('numChildren').unsigned().defaultTo(0);
		t.string('howActiv').notNull();
		t.string('briefBio').nullable();
		t.string('homeStyle').notNull();
		t.string('homeFloors').notNull();
		t.string('yardSize').notNull();
		t.string('devEnviron').notNull();
		
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('sitters');
};
