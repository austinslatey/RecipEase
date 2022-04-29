const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
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
    recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    ]
  });

const User = mongoose.model('User', userSchema);

module.exports = User;