const mongoose = require('mongoose');
const Recipe = require('./Recipe');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    Recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    ]
  });

const User = mongoose.model('User', userSchema);

module.exports = User;