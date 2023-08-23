const express = require('express');
const router = express.Router();
const { createTickets } = require('../controllers/tickets.controller');

router.post('/create', createTickets);

module.exports = router;
