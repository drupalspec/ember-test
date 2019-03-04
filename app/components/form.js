import Component from '@ember/component';

export default Component.extend({
  actions: {
    submit() {
      this.sendAction('action', {
        homepage: this.homepage,
        description: this.description
      })
    }
  }
});
