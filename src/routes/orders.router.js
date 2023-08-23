const express = require('express');
const router = express.Router();
const { Orders }= require('../models'); // Import your Sequelize model

// Create an order
router.post('/', async (req, res) => {
    try {
        const order = await Orders.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Orders.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a specific order by order_id
router.get('/:order_id', async (req, res) => {
    const { order_id } = req.params;
    try {
        const order = await Orders.findByPk(order_id);
        if (!order) {
            res.status(404).json({ error: 'Order not found' });
        } else {
            res.status(200).json(order);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update an order by order_id
router.put('/:order_id', async (req, res) => {
    const { order_id } = req.params;
    try {
        const order = await Orders.findByPk(order_id);
        if (!order) {
            res.status(404).json({ error: 'Order not found' });
        } else {
            await order.update(req.body);
            res.status(200).json(order);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete an order by order_id
router.delete('/:order_id', async (req, res) => {
    const { order_id } = req.params;
    try {
        const order = await Orders.findByPk(order_id);
        if (!order) {
            res.status(404).json({ error: 'Order not found' });
        } else {
            await order.destroy();
            res.status(204).end();
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
