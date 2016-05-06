exports.seed = function(knex, Promise) {
	var date = new Date();
	return knex('users').del()
	// copy start
	.then(() => {
		return knex('users').insert({
			firstName: 'Admin',
			lastName: 'Admin',
			email: 'admin@admin.com',
			createdAt: date,
			briefBio: '',
			hmStyleSize: '',
			ydStyleSize: '',
			devEnviron: '',
			photo: ''
		})
		.returning('id')
		.then(userId => {
			userId = userId[0];
			return knex('authentication').insert({
				userId: userId,
				type: 'local',
				identifier: 'admin@admin.com',
				createdAt: date,
				password: '$2a$10$hzUFUormQdvk18PWgZdyBObZ09m4Kd1yB7DHWH60wMJ5kPHKxZWm6'
			});
		});
	})
	// copy end
};