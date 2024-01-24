const express = require('express');
const cors = require('cors');
const appRoutes = require('./routes/index');
const {
  RESPONSE_STATUS,
  RESPONSE_MESSAGE,
} = require('./helper/constant/responseConstant');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Talenavi Movie' });
});
app.use('/', appRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: RESPONSE_STATUS.failed,
    message: err.message || RESPONSE_MESSAGE.internalServerError,
    data: null,
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
