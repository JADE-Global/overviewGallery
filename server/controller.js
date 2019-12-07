var model = require('./model.js');

let controller = {

  sampleQuery: function (locationId) {
    return model.sampleQuery(locationId);
  },

  locationQuery: function (locationId) {
    return model.locationQuery(locationId);
  },

  imagesQuery: function (locationId) {
    let imagesQueryPromise = new Promise( (resolve, reject) => {
      model.imagesQuery(locationId)
      .then( results => {
        let imagesData = [];
        results.forEach( result => {
          let image = {
            id: result.id,
            img_url: result.img_url,
            title: result.title,
            createdAt: result.createdAt,
            locationId: result.locationId,
            owner: {
              id: result.ownerId,
              name: result.ownerName,
              avatar_url: result.ownerAvatar_url,
              friendCount: result.ownerFriendCount,
              starCount: result.ownerStarCount,
              eliteYear: result.ownerEliteYear,
            }
          };
          imagesData.push(image);
        });
        resolve(imagesData);
      });
    });
    return imagesQueryPromise;
  },

};

module.exports = controller;