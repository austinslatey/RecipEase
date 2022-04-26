const mongoose = require('mongoose');

const { Schema } = mongoose;

const ingredientSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0.99
    },
    quantity: {
      type: Number,
      min: 0,
      default: 0
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  });
  
  const Ingredient = mongoose.model('Ingredient', ingredientSchema);
  
  module.exports = Ingredient;