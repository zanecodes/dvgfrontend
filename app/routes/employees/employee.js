import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('employee', {name: 'Name namerson', address: '12345 help me lane', active: true});
  }
});
