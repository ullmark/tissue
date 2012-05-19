var Comment = require('../models/comment');

// Comments Collection
// -------------------

module.exports = Backbone.Collection.extend({
  // ... contains Comments
  model: Comment
});
