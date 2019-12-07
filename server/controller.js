var model = require('./model.js');

let controller = {

  sampleQuery: function (locationId) {
    return model.sampleQuery(locationId);
  },

  locationQuery: function (locationId) {
    return model.locationQuery(locationId);
  },

  imagesQuery: function (locationId) {
    return model.imagesQuery(locationId);
  },

};

module.exports = controller;