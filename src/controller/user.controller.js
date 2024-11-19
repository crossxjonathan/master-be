/* eslint-disable no-unused-vars */
const { response } = require('../helper/common');
const { createUsers, removeUsers, uptodateUsers, getAllUsers, findUserById } = require('../model/users');

// GET ALL USERS
const getAllUser = async (req, res, next) => {
    try {
        const result = await getAllUsers();
        response(res, 200, true, result.rows, "Get all users successful");
    } catch (error) {
        response(res, 500, false, error.message, "Failed to get users");
    }
};

// ADD USER
const addUser = async (req, res, next) => {
    try {
        const { firstName, lastName, maidenName, age, gender, email, username, password, birthDate } = req.body;
        const result = await createUsers({ firstName, lastName, maidenName, age, gender, email, username, password, birthDate });
        response(res, 201, true, result.rows[0], "User added successfully");
    } catch (error) {
        response(res, 500, false, error.message, "Failed to add user");
    }
};


// DELETE USER
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await removeUsers(id);
        response(res, 200, true, null, "User deleted successfully");
    } catch (error) {
        response(res, 500, false, error.message, "Failed to delete user");
    }
};

// UPDATE USER
const updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { email, username } = req.body;
  
      if (!id) {
        return response(res, 400, false, null, "User ID is required");
      }
      if (!email || !username) {
        return response(res, 400, false, null, "Email and Username are required");
      }
  
      await uptodateUsers({ email, username }, id);
      response(res, 200, true, null, "User updated successfully");
    } catch (error) {
      response(res, 500, false, error.message, "Failed to update user");
    }
  };
  

// GET USER BY ID
  const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            return response(res, 400, false, null, "User ID is required");
        }

        const result = await findUserById(id);

        if (result.rowCount === 0) {
            return response(res, 404, false, null, "User not found");
        }

        response(res, 200, true, result.rows[0], "Get user by ID successful");
    } catch (error) {
        response(res, 500, false, error.message, "Failed to get user by ID");
    }
};

module.exports = {
    addUser,
    getAllUser,
    updateUser,
    deleteUser,
    getUserById
};
