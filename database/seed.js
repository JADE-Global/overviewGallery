const faker = require('faker');
const db = require('./index.js');
var Promise = require('bluebird');

Promise.promisifyAll(db);

const aws_url = 'https://yelp-overview-gallery.s3-us-west-1.amazonaws.com/images/'

const USER_COUNT = 100;
const LOCATION_COUNT = 100;
const IMG_SAMPLE_COUNT = {
  0: 5,
  1: 5,
  2: 10,
  3: 20,
  4: 40
}


let seedHelper = {
  getElite: function() {
    if (Math.random() < 0.8) {
      return null;
    } else {
      return 2010 + Math.floor(Math.random() * 10);
    }
  }
}


let seed = {

  seedStart: function() {
    let promise = new Promise((resolve, reject) => {
      db.queryAsync('SET FOREIGN_KEY_CHECKS = 0')
      .then(() => {
        return db.queryAsync('TRUNCATE TABLE images');
      })
      .then(() => {
        return db.queryAsync('TRUNCATE TABLE locations');
      })
      .then(() => {
        return db.queryAsync('TRUNCATE TABLE users');
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
    });
    return promise;
  },

  seedUsers: function() {
    let promise = new Promise ((resolve, reject) => {
      let query = 'INSERT INTO users (name, avatar_url, friendCount, starCount, eliteYear) VALUES (?, ?, ?, ?, ?)';
      let seedUsersPromises = [];
      for (var i = 0; i < USER_COUNT; i++) {
        var name = faker.name.findName();
        var avatar_url = faker.image.avatar();
        var friendCount = Math.floor(Math.random() * 500);
        var starCount = Math.floor(Math.random() * 100);
        var eliteYear = seedHelper.getElite();
        
        seedUsersPromises.push(db.queryAsync(query, [name, avatar_url, friendCount, starCount, eliteYear]));
      }
      Promise.all(seedUsersPromises)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
    });
    return promise;
  },

  seedLocations: function() {
    let promise = new Promise((resolve, reject) => {
      let query = 'INSERT INTO locations (name, ownerId) VALUES (?, ?)';
      let seedLocationsPromises = [];
      for (var i = 0; i < LOCATION_COUNT; i++) {
        var name = faker.address.streetName();
        var ownerId = Math.floor(Math.random() * 100 + 1);

        seedLocationsPromises.push(db.queryAsync(query, [name, ownerId]));
      }
      Promise.all(seedLocationsPromises)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
    });
    return promise;
  },

  seedImages: function() {
    let promise = new Promise((resolve, reject) => {
      let query = 'INSERT INTO images (img_url, title, locationId, ownerId) VALUES (?, ?, ?, ?)';
      let seedImagesPromises = [];
      for (var i = 0; i < LOCATION_COUNT; i++) {
        var random = Math.floor(Math.random() * 5); // pick 1 out of 5 folders of images
        var imgCount = IMG_SAMPLE_COUNT[random];
        for (var j = 0; j < imgCount; j++) {
          var img_url = aws_url + random + '/' + j + '.jpg';
          var title = faker.commerce.productName();
          var locationId = i + 1;
          var ownerId = Math.floor(Math.random() * 100 + 1);
          
          seedImagesPromises.push(db.queryAsync(query, [img_url, title, locationId, ownerId]));
        }
      }
      Promise.all(seedImagesPromises)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
    });
    return promise;
  }

}

seed.seedStart()
.then(() => {
  return seed.seedUsers();
})
// seed.seedUsers()
.then(() => {
  return seed.seedLocations();
})
.then(() => {
  return seed.seedImages();
})
.then(() => {
  db.end();
})
.catch((err) => {
  throw(err);
});