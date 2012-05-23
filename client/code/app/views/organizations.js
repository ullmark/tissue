var Organizations = require('../collections/organizations');

module.exports = Backbone.View.extend({
  template: ss.tmpl['organizations'],

  initialize: function() {
    this.organizations = new Organizations;
    this.organizations.fetch();
    this.organizations.bind('reset', this.render);
  },

  render: function() {
    console.log('hello');
  }
});
