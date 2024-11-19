const pool = require('../config/db');

const getAllUsers = () => {
    return pool.query("SELECT * FROM users")
}


const createUsers = ({ firstName, lastName, maidenName, age, gender, email, username, password, birthDate }) => {
    return pool.query(
        `INSERT INTO users (firstName, lastName, maidenName, age, gender, email, username, password, birthDate) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, 
        [firstName, lastName, maidenName, age, gender, email, username, password, birthDate]
    );
};


const removeUsers = (id) => {
    return pool.query("DELETE FROM users WHERE id = $1", [id]);
}

const uptodateUsers = (data, id) => {
    console.log("Updating user with ID:", id, "Data:", data);
    return pool.query(
      "UPDATE users SET email = $1, username = $2 WHERE id = $3",
      [data.email, data.username, id]
    );
  };
  
  const findUserById = (id) => {
    return pool.query("SELECT * FROM users WHERE id = $1", [id]);
};

module.exports = {
    createUsers,
    removeUsers,
    uptodateUsers,
    getAllUsers,
    findUserById
}