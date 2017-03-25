import Ember from 'ember';

export default Ember.Controller.extend({
	profile: Ember.inject.service(),

	email:'',
	password:'',
	actions:{
		login(){
			this.get('profile' ).login(this.get('email'), this.get('password'));

		}
		
	},
});
