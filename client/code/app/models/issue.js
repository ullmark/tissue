
// Models: Issue
// -------------
// This model maps is used against GitHubs [Issue](http://developer.github.com/v3/issues/)
// response

module.exports = Backbone.Model.extend({

  // The identifier used by github is the **number** property
  // by setting the idAttibute we make backbone aware of this.
  idAttribute: 'number'

});
