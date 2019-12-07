var db = require('../database/index.js');
var Promise = require('bluebird');

Promise.promisifyAll(db);

let model = {

  sampleQuery: function (locationId) {
    let sampleQueryPromise = new Promise((resolve, reject) => {
      db.queryAsync('SELECT * FROM images WHERE locationId = ?', [locationId])
      .catch( err => {
        reject(err);
      })
      .then( results => {
        var data = [];
        for (var i = 0; i < results.length; i++){
          var obj = {
            'id': results[i].id,
            'img_url': results[i].img_url,
            'title': results[i].title,
            'createdAt': results[i].createdAt,
            'locationId': results[i].locationId, 
            'ownerId': results[i].ownerId
          };
          data.push(obj);
        }
        resolve(data);
      });
    });
    return sampleQueryPromise;
  },

  locationQuery: function (locationId) {
    let locationQueryPromise = new Promise((resolve, reject) => {
      db.queryAsync('SELECT * FROM locations WHERE id = ?', [locationId])
      .catch( err => {
        reject(err);
      })
      .then( result => {
        console.log(result);
        resolve(result);
      });
    });
    return locationQueryPromise;
  },

  imagesQuery: function (locationId) {
    let imagesQueryPromise = new Promise((resolve, reject) => {
      // db.queryAsync(`SELECT * FROM users WHERE locationId = ?`, locationId)
      db.queryAsync(`SELECT i.id AS id,
                            i.img_url AS img_url,
                            i.title AS title,
                            i.createdAt AS createdAt,
                            i.ownerId AS ownerId,
                            u.name AS ownerName,
                            u.avatar_url AS ownerAvatar_url,
                            u.friendCount AS ownerFriendCount,
                            u.starCount AS ownerStarCount,
                            u.eliteYear AS ownerEliteYear
                     FROM images i
                     INNER JOIN users u
                     ON i.ownerId = u.id
                     WHERE i.locationId = ?`, locationId)
      .catch( err => {
        reject(err);
      })
      .then( results => {
        resolve(results);
      })
    });
    return imagesQueryPromise;
  },

};

module.exports = model;

// SELECT * FROM images INNER JOIN locations ON locationId = locations.id WHERE images.locationId = 2;
// SELECT * FROM images INNER JOIN users ON ownerId = users.id WHERE images.locationId = 2;
