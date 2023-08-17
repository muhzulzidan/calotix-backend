const { Events, Tickets } = require('../models');

const createEvents = async (req, res) => {
  try {
    const poster = req.file.filename;
    const {
      headline,
      artistName,
      regionId,
      venue,
      startDate,
      endDate,
      startTime,
      endTime,
      description,
    } = req.body;

    const insertEvent = await Events.create({
      headline: headline,
      artist_name: artistName,
      region_id: parseInt(regionId),
      venue: venue,
      start_date: startDate,
      end_date: !endDate ? null : endDate,
      start_time: startTime,
      end_time: endTime,
      poster: poster,
      description: description,
    });
    console.log(req.body, poster);
    res.status(201).send({
      message: 'Event success inserted',
      data: insertEvent,
    });
  } catch (error) {
    res.send({
      message: 'Occured error',
      data: error,
    });
    console.log(req.body, req.file);
  }
};

const fetchEvents = async (req, res) => {
  const offsetPage = parseInt(req.query.page) || 1;
  const perPage = 5;
  try {
    const countRows = await Events.count();
    const response = await Events.findAll({
      order: [['id', 'DESC']],
      limit: perPage,
      offset: (offsetPage - 1) * perPage,
    });

    res.status(200).send({
      message: 'Fetch all data success',
      data: response,
      totalrow: countRows,
    });
  } catch (error) {
    res.send({
      message: 'Occured Error',
    });
  }
};

const detailEvents = async (req, res) => {
  const { eventId } = req.params;
  try {
    const dataEvent = await Events.findOne({
      where: {
        id: eventId,
      },
    });

    const dataTickets = await Tickets.findOne({
      where: {
        event_id: eventId,
      },
    });

    res.status(200).send({
      message: 'Detail event and ticket success fetching',
      dataEvent: dataEvent,
      dataTickets: dataTickets,
    });
  } catch (error) {
    res.send({
      message: 'Occured Error',
      data: error,
    });
  }
};

module.exports = { createEvents, fetchEvents, detailEvents };
