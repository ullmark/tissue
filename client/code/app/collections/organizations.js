var Organization = require('../models/organization')
  , OrganizationStore = require('../sync/organizationStore');

// Collections: Organizations
// --------------------------
// Backbone collection for Organizations...

module.exports = Backbone.Collection.extend({
  // ... contains Organizations
  model: Organization
});
