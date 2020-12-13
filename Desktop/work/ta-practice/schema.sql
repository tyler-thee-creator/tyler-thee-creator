DROP DATABASE IF EXISTS ta_practice;

CREATE DATABASE ta_practice;

USE ta_practice;

CREATE TABLE ta_practice_table (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  age INTEGER NOT NULL,
  PRIMARY KEY (id)
);