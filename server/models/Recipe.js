const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    ingredients: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Ingredient'
        }
      ]
    });


const Product = mongoose.model('Recipe', recipeSchema);

module.exports = Product;
