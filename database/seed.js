const faker = require('faker');
const db = require('./index.js');

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

  seedUsers: function() {
    let query = 'INSERT INTO users (name, avatar_url, friendCount, starCount, eliteYear) VALUES (?, ?, ?, ?, ?)';
    for (var i = 0; i < USER_COUNT; i++) {
      var name = faker.name.findName();
      var avatar_url = faker.image.avatar();
      var friendCount = Math.floor(Math.random() * 500);
      var starCount = Math.floor(Math.random() * 100);
      var eliteYear = seedHelper.getElite();
      
      db.query(query, [name, avatar_url, friendCount, starCount, eliteYear], function(err, results) {
        if(err) {
          throw err;
        } else {
          console.log('user seeded.');
        }
      });
    }
  },

  seedLocations: function() {
    let query = 'INSERT INTO locations (name, ownerId) VALUES (?, ?)';
    for (var i = 0; i < LOCATION_COUNT; i++) {
      var name = faker.address.streetName();
      var ownerId = Math.floor(Math.random() * 100 + 1);

      db.query(query, [name, ownerId], function(err, results) {
        if(err) {
          throw err;
        } else {
          console.log('location seeded.');
        }
      });
    }
  },

  seedImages: function() {
    let query = 'INSERT INTO images (img_url, title, locationId, ownerId) VALUES (?, ?, ?, ?)';
    for (var i = 0; i < LOCATION_COUNT; i++) {
      var random = Math.floor(Math.random() * 5); // pick 1 out of 5 folders of images
      var imgCount = IMG_SAMPLE_COUNT[random];
      for (var j = 0; j < imgCount; j++) {
        var img_url = aws_url + random + '/' + j + '.jpg';
        var title = faker.commerce.productName();
        var locationId = i + 1;
        var ownerId = Math.floor(Math.random() * 100 + 1);
        
        db.query(query, [img_url, title, locationId, ownerId], function(err, results) {
          if(err) {
            throw err;
          } else {
            console.log('image seeded.');
          }
        });
      }
    }
  }

}



seed.seedUsers();
seed.seedLocations();
seed.seedImages();