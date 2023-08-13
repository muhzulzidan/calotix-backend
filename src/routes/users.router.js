const { getAllUsers } = require('../controllers/users.controller');
const express = require('express');
const router = express.Router();

router.get('/', getAllUsers);

module.exports = router;
