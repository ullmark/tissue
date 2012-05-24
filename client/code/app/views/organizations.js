var Organizations = require('../collections/organizations');

// Views: Organizations
// --------------------

module.exports = Backbone.View.extend({
  template: ss.tmpl['organizations-list'],

  initialize: function() {
    _.bindAll(this, 'render');
    this.organizations = new Organizations;
    this.organizations.fetch();
    this.organizations.bind('reset', this.render);
  },

  render: function() {
    this.$el.html(this.template.render(this.organizations));
  }
});
