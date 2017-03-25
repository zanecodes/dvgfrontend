import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  photos: DS.attr('string'),
  evaluations: DS.attr('evaluation'),
  active: DS.attr('numbers')
});
