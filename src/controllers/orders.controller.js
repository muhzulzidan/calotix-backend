const { Orders, Order_Bridges } = require('../models');
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const create = async (req, res) => {
  try {
    const { eventId, payment, tickets } = req.body;
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    const orderId = `${timestamp}-${randomNum}`;

    const detailOrder = tickets.map((ticket) => ({
      id: ticket.id,
      price: ticket.price,
      quantity: ticket.quantity,
      name: ticket.category,
    }));

    const totalAmount = tickets.reduce((sum, items) => sum + items.total, 0);

    const requestPayment = {
      payment_type: 'bank_transfer',
      transaction_details: {
        gross_amount: totalAmount,
        order_id: orderId,
      },
      // customer_details: {
      //   email: 'noreply@example.com',
      //   first_name: 'budi',
      //   last_name: 'utomo',
      //   phone: '+6281 1234 1234',
      // },
      item_details: detailOrder,
      bank_transfer: {
        bank: payment,
      },
    };

    const response = await axios.post(
      `${process.env.MIDTRANS_BASE_URL}charge`,
      requestPayment,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.MIDTRANS_SERVER_KEY
          ).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const order = await Orders.create({
      id: orderId,
      event_id: parseInt(eventId),
      user_id: 1,
      amount: totalAmount,
      payment_status: 'PENDING',
    });

    const orderBridgesData = tickets.map((ticket) => ({
      order_id: orderId,
      ticket_id: ticket.id,
      quantity: ticket.quantity,
    }));

    const orderBridges = await Order_Bridges.bulkCreate(orderBridgesData);

    res.status(200).send({
      message: 'Checkout Success',
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllOrder = async (req, res) => {
  try {
    const orders = await Orders.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOrderById = async (req, res) => {
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
};

const updateOrder = async (req, res) => {
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
};

const deleteOrder = async (req, res) => {
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
};

module.exports = {
  create,
  getAllOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
};
