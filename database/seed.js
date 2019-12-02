const faker = require('faker');
const db = require('db');

const imgUrl = 'https://yelp-overview-gallery.s3-us-west-1.amazonaws.com/images/'
// https://yelp-overview-gallery.s3-us-west-1.amazonaws.com/images/0/0.jpg

const USER_COUNT = 100;
const LOCATION_COUNT = 100;



let seedHelper = {
  getElite: function() {
    if (Math.random() < 0.8) {
      return null;
    } else {
      return 2010 + Math.floor(Math.random() * 10);
    }
  },

  getImages: function() {

  }
}



let seed = {

  seedUsers: function() {
    for (var i = 0; i < USER_COUNT; i++) {
      let query = 'INSERT INTO users (name, friendCount, starCount, eliteYear) VALUES';
      var name = faker.name.findName();
      var starCount = Math.floor(Math.random() * 100);
      var friendCount = Math.floor(Math.random() * 500);
      var eliteYear = seedHelper.getElite();
    }
  },

  seedLocations: function() {
    var name = faker.address.streetName();
    var ownerId = Math.floor(Math.random() * 100);
  },

  seedImages: function() {
    
  }

}



seed.seedUsers();
seed.seedLocations();
seed.seedImages();