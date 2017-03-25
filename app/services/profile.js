import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),

  profile: undefined,

  login(username, password) {
    this.get('ajax').request('/login', {
      method: 'POST',
      data: {
        username: username,
        password: password
      }
    }).then((err, userId) => {
      this.set('profile', this.get('store').findRecord('user', userId));
    });
  }
});
