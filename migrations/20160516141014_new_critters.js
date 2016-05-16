
exports.up = function(knex, Promise) {
  return knex.schema.table('critters', function(t){
  	t.dropColumn('critterBio');
  }).then(function() {
  	return knex.schema.table('critters', function(t){
	  	t.text('critterBio');
	  });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('critters', function(t){
  	t.dropColumn('critterBio');
  }).then(function() {
  	return knex.schema.table('critters', function(t){
	  	t.string('critterBio');
	  });
  });
};
