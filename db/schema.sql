DROP DATABASE IF EXISTS burgersDb;
CREATE database burgersDb;

USE burgersDb;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    burgerName VARCHAR
    (100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY
    (id)
);

    SELECT *
    FROM burgers;
