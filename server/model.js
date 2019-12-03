var db = require('../database/index.js');
var Promise = require('bluebird');

Promise.promisifyAll(db);

let model = {

  sampleQuery: function (locationId) {
    let promise = new Promise((resolve, reject) => {
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
    return promise;
  }

}

module.exports = model;