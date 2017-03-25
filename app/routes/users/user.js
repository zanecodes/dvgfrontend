import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('user', {email: 'test@test.com', username: 'Dave Wiggles', employees:[
      this.get('store').createRecord('employee'),
      this.get('store').createRecord('employee')
    ]});
  }
});
