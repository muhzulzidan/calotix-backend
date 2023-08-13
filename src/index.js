require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');

const userRouter = require('./routes/users.router');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.use(cors({ origin: true, credentials: true }));

app.use('/api/user', userRouter);

app.listen(process.env.SERVER_PORT || 3008, () => {
  console.log('Server Running');
});
