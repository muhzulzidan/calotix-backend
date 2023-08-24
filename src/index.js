require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const { sequelize } = require('./models');

const userRouter = require('./routes/users.router');
const eventRouter = require('./routes/events.router');
const ticketRouter = require('./routes/tickets.router');
const orderRouter = require('./routes/orders.router');
const midtransRouter = require('./routes/midtrans.router');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection success');
  })
  .catch((error) => console.log(error));

// app.use((req, res, next) => {
//   const error = new Error('Page Not Found');
//   error.status = 404;
//   next(error);
// });

// app.use((error, req, res, next) => {
//   res.status(error.message || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });
app.use('/api/orders', orderRouter);
app.use('/api/user', userRouter);
app.use('/api/events', eventRouter);
app.use('/api/tickets', ticketRouter);
app.use('/api/midtrans-webhook', midtransRouter);
app.use(express.static(path.join('public')));
app.use('/uploads/poster', express.static(path.join('uploads/poster')));
app.listen(process.env.SERVER_PORT || 3008, () => {
  console.log('Server Running');
  console.log(__dirname);
});
