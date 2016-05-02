exports.up = function(knex, Promise) {
	return knex.schema.createTable('critters', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('critterName').notNull();
		t.string('critterPhoto').nullable();
		t.string('species').notNull();
		t.string('energyLevel').notNull();
		t.string('specNeeds').notNull();
		t.string('critterBio').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('critters');
};
