
// Sync: OrganizationStore
// -----------------------
// Implements read for Organization Store

// Read
exports.read = function(model, options) {
  console.log(model);
  $.ajax('https://api.github.com/user/orgs?access_token=' + app.accessToken)
  .done(function(data) {

  });
};
