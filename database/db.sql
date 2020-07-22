DROP DATABASE IF EXISTS portfolio;

CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE project(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  date VARCHAR(30) NULL,
  link VARCHAR(200) NULL,
  image VARCHAR(200) NULL,
  description VARCHAR(300) NULL
);

CREATE TABLE languages (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NULL
);

INSERT INTO project (name, date, link, image, description) VALUES ('Book Of Wilders', 'Avril 2020', 'https://malikh88.github.io/wilder_book/', 'WilderBook.png', 'Projet 1 de la Wild Code School présentant les étudiants de la promo Mars 2020 de la WCS de Reims');

INSERT INTO languages (name) VALUES ('HTML');