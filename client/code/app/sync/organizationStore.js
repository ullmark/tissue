
// Sync: OrganizationStore
// -----------------------
// Implements read for Organization Store

// Read
exports.read = function(model, options) {
  $.ajax('https://api.github.com/user/orgs?access_token=')
  .done(function(data) {
  });
};
