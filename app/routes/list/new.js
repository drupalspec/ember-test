import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    sendData(data) {
      this.store.createRecord('list', data).save()
        .then(this.transitionTo('list'));
    }
  }
});
