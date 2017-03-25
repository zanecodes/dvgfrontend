import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('user', {
      email: 'test@test.com', username: 'Dave Wiggles', isDirector: false, employees: [
        this.get('store').createRecord('employee', {name: 'Name Nameson'}),
        this.get('store').createRecord('employee', {name: 'Billy Bob'})
      ]
    });
  }
});
