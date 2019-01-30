CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  `id` int (11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) NOT NULL,
  `chirp` varchar(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
  
);