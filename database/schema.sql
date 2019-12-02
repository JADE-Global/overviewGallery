DROP DATABASE IF EXISTS yelp;
CREATE DATABASE yelp;

USE yelp;

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  friendCount INT DEFAULT 0,
  starCount INT DEFAULT 0,
  eliteYear INT DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE locations (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  ownerId INT,
  PRIMARY KEY (id),
  FOREIGN KEY (ownerId) REFERENCES users(id)
);

CREATE TABLE images (
  id INT AUTO_INCREMENT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  locationId INT,
  ownerId INT,
  PRIMARY KEY (id),
  FOREIGN KEY (locationId) REFERENCES locations(id),
  FOREIGN KEY (ownerId) REFERENCES users(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -h localhost -u user -p < ./database/schema.sql
 *  to create the database and the tables.*/

