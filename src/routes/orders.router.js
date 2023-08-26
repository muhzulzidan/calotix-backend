const express = require('express');
const router = express.Router();
const {
  create,
  getAllOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require('../controllers/orders.controller');

// Create an order
router.post('/', create);

// Get all orders
router.get('/', getAllOrder);

// Get a specific order by order_id
router.get('/:order_id', getOrderById);

// Update an order by order_id
router.put('/:order_id', updateOrder);

// Delete an order by order_id
router.delete('/:order_id', deleteOrder);

module.exports = router;
