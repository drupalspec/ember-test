import DS from 'ember-data';

export default DS.Model.extend({
  homepage: DS.attr(),
  description: DS.attr()
});
