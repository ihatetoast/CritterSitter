//FE models require Backbone
import Backbone from 'backbone';


const CritterModel = Backbone.Model.extend({
	defaults: {
		number: '',
		species: '',
		otherSpecies: '',
		critterBio:'',
		critterPhoto:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	urlRoot: '/api/v1/Critter',
	idAttribute: 'id'
});
//instantiated. 
export default new CritterModel();
	