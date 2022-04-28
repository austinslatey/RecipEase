const mongoose = require('mongoose');
const uri = SECRET_URI

mongoose.connect(uri|| 'mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
