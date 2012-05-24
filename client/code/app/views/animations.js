
// Views: Animations
// -----------------
// In this file we add a couple of animations to Backbones View
// Prototype. Which enables us to us the animations directly on all
// views.

// default properties for our animations
var defaults = {
  direction: 'left',
  speed: 300
}

// ### Slide out animation
Backbone.View.prototype.slideOut = function(options) {
  // We want it to slide out of the window.
  var width = $(window).width();

  // Which direction should it go and at what speed?
  var direction = (options && options.direction == 'left') ? '-' : '';
  var speed = (options && options.speed) ? options.speed : 300;

  // Make the animation
  this.$el.css({ position: 'relative' })
    .animate({ left: direction + width + 'px' }, speed, function() {
      $(this).hide();
    });
};

// ### Slide in animation
Backbone.View.prototype.slideIn = function(options) {

};
