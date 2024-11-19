CREATE TABLE users (
    id INT NOT NULL GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    maidenName VARCHAR(50),
    age VARCHAR(20),
    gender VARCHAR(20),
    username VARCHAR(20),
    birthDate VARCHAR(20),
    image VARCHAR(255),
    PRIMARY KEY (id)
);

