//FE models require Backbone
import Backbone from 'backbone';


const UserModel = Backbone.Model.extend({
	defaults: {
		firstName: '',
		lastName: '',
		email: '',
		photo: '',
		password: '',
		briefBio:'',
		hmStyleSize:'',
		ydStyleSize:'',
		devEnviron:'',
		createdAt: null,
		updatedAt: null,
		deletedAt: null
	},
	urlRoot: '/api/v1/User',
	idAttribute: 'id'
});
//instantiated. 
export default new UserModel(window.user);
	//Add the following script to index.ejs:
	// <script type="text/javascript">
	// 		window.user = <%- user ? JSON.stringify(user) : '{}' %>;
	// 	</script>