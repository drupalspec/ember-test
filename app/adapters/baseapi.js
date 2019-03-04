import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://www.onlinetool.in',
  namespace: 'api'
});
