

exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(t){
  	t.dropColumn('briefBio');
  }).then(function() {
  	return knex.schema.table('users', function(t){
	  	t.text('briefBio');
	  });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(t){
  	t.dropColumn('briefBio');
  }).then(function() {
  	return knex.schema.table('users', function(t){
	  	t.string('briefBio');
	  });
  });
};
