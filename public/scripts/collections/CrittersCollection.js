import Backbone from 'backbone';
import CritterModel from './../models/Critter.js';

const CrittersCollection = Backbone.Collection.extend({
	model: CritterModel,
	url: '/api/v1/Critter'
});

export default new CrittersCollection();