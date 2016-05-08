exports.seed = function(knex, Promise) {
	var date = new Date();
	return knex('users').del()
	// copy start
	.then(() => {
		return knex('users').insert({
			firstName: 'Katy',
			lastName: 'Cassidy',
			email: 'katy@cassidy.com',
			createdAt: date,
			briefBio: 'i am awesome! i am awesome! i am awesome! i am awesome! i am awesome! i am awesome! i am awesome! i am awesome! i am awesome! i am awesome! ',
			hmStyleSize: 'palace',
			ydStyleSize: 'huuuuge tracts of land',
			devEnviron: 'down by the river',
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
	// copy start
	.then(() => {
		return knex('users').insert({
			firstName: 'Martin',
			lastName: 'Grossman',
			email: 'martymartface@grossmail.com',
			createdAt: date,
			briefBio: 'Trello npm run dev over it bibendum collections ajax id browserHistory katy, tellus over it magna Penn Field. Maria e  ad Lorem Lorem Aliquam, knex underscore ullamcorper span over it. Bibendum npm run dev ultrices Backbone dictum object donec martin, fermentum eu ligula vestibulum accumsan rhoncus risus. Router friday dom href aaron magna markup.',
			hmStyleSize: 'large house',
			ydStyleSize: 'large yard',
			devEnviron: 'country',
			photo: ''
		})
		.returning('id')
		.then(userId => {
			userId = userId[0];
			return knex('authentication').insert({
				userId: userId,
				type: 'local',
				identifier: 'martymartface@grossmail.com',
				createdAt: date,
				password: '$2a$10$hzUFUormQdvk18PWgZdyBObZ09m4Kd1yB7DHWH60wMJ5kPHKxZWm6'
			});
		});
	})
	// copy end
	.then(() => {
		return knex('users').insert({
			firstName: 'Anna',
			lastName: 'Banannarama',
			email: 'anna@banana.com',
			createdAt: date,
			briefBio: 'Knex this markup icecream this, npm run dev magna porttitor vehicula huddle eu ligula vestibulum accumsan underscore. HashHistory over it function migrations porttitor vehicula link, rhoncus Aliquam laoreet Proin pellentesque chrome. Javascritti ajax underscore joseph joseph span e , jen Aliquam quis chrome. Underscore if else  onClique perk router, te let donec sapien markup var. Te vel quis router for maria onClique jquerii.',
			hmStyleSize: 'small house',
			ydStyleSize: 'courtyard',
			devEnviron: 'city',
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
	});
};