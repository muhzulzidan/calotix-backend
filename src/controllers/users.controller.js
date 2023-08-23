const { Users } = require('../models');
const getAllUsers = async (req, res) => {
  const userData = await Users.findAll();
  res.status(200).send({
    message: 'Fetch all user',
    data: userData,
  });
};


module.exports = { getAllUsers };
