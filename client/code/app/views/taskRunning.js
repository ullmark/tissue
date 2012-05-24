
// Views: Working
// --------------
// This view displays a small ajax loader to
// notify the user that background tasks is running

module.exports = Backbone.View.extend({
  id: 'fetching',

  initialize: function() {
    _.bindAll(this, 'render');
    this.taskCount = 0;
    this.model.bind('change', this.render);
  },

  // cache our template
  template: ss.tmpl['working'],

  //
  taskStarted: function() {
    this.taskCount++;
    clearTimeout(this.hideTimout);
    this.show();
  },

  //
  taskEnded: function() {
    this.taskCount--;
    if (this.taskCount == 0) {
      this.hideTimeout = setTimeout(function() {
        this.hide();
      }, 300);
    }
  },

  // Show displays the "loading" screen
  show: function() {
    this.$el.animate({ top: '40px' }, 300);
  },

  // Hide animates it up
  hide: function() {
    this.$el.animate({ top: '0px' }, 300);
  },

  render: function() {
    this.$el.html(this.template.render());
    return this;
  },
});
