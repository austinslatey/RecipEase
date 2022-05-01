const mongoose = require('mongoose');

// Heroko Mongo
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/RecipEase',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;