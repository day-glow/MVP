
/*
Database: Motivation
'show tables;'
sources
category
content

users
users_likes

*/

/*
'describe sources;'
id INT, NO, PRIMARY KEY, NULL, auto_increment
name VARCHAR, NO, -, NULL, auto_increment
*/

CREATE TABLE sources(
  id int auto_increment primary key,
  name varchar(100) not null
);

/*
'describe category;'
id INT, NO, PRIMARY KEY, NULL, auto_increment
name VARCHAR, NO, -, NULL, auto_increment
*/

CREATE TABLE category(
  id int auto_increment primary key,
  name varchar(100) not null
);

/*
'describe content;'
id INT, NO, PRIMARY KEY, NULL, auto_increment
JSON VARCHAR, NO, -, NULL, auto_increment
text VARCHAR, NO, -, NULL, auto_increment
//sources INT, NO, FOREIGN KEY, NULL, auto_increment
//category INT, NO, FOREIGN KEY, NULL, auto_increment
//likes
*/

CREATE TABLE content(
  id int auto_increment primary key,
  text_body text(1000) not null,
  JSON_body text(5000) not null,
  source int not null,
  category int not null,
  total_likes int not null
);

CREATE TABLE users(
  id int auto_increment primary key,
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  user_name varchar(100) not null,
  createdAt datetime null,
  updatedAt datetime null
);

CREATE TABLE user_likes(
  id int auto_increment primary key,
  content_id int not null,
  users_id int not null,
  createdAt datetime null,
  updatedAt datetime null
);