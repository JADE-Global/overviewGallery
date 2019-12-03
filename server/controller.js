var model = require('./model.js');

let controller = {

  sampleQuery: function (locationId) {
    return model.sampleQuery(locationId);
  }

}

module.exports = controller;