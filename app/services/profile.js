import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),

  profile: undefined,

  login(email, password) {
    this.get('ajax').request('/login', {
      method: 'POST',
      data: {
        email: email,
        password: password
      }
    }).then((err, userId) => {
      this.set('profile', this.get('store').findRecord('user', userId));
    });
  },

  isLoggedIn() {
    return this.get('profile');
  }
});
