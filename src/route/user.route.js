const express = require('express');
const router = express.Router();
const { addUser, getAllUser, updateUser, deleteUser, getUserById } = require('../controller/user.controller');

router.get('/users', getAllUser);
router.get('/users/:id', getUserById);
router.post('/users', addUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;
