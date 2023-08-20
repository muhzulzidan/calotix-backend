const { Tickets } = require('../models');

const createTickets = async (req, res) => {
  try {
    const { eventId, category, qty, price } = req.body;
    const dataCreated = await Tickets.create({
      event_id: parseInt(eventId),
      category: category,
      qty: qty,
      price: price,
    });

    console.log(dataCreated);
  } catch (error) {
    res.send({
      message: 'Occured Error',
      data: error,
    });
    console.log(req.body);
  } finally {
    res.status(201).send({
      message: 'Tickets success added',
    });
  }
};

module.exports = { createTickets };
