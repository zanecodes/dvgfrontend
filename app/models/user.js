import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  username: DS.attr('string'),
  employees: DS.hasMany('employee'),
  isDirector: DS.attr('boolean')
});
