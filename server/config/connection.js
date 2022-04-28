const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config();
const uri = "mongodb+srv://test:kylercole@cluster0.q5hmm.mongodb.net/test"

mongoose.connect(uri|| 'mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
