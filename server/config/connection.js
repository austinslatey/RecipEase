const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config();


mongoose.connect(uri|| 'mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
