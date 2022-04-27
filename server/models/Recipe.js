const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    instructions: [
      {
      type : String,
      required: true,
      }
    ],
    tags: [{
      type: String
      }
    ],
    servings: {
      type: String
    },
    time: {
      type: Number 
    },      
    ingredients: [
        {
          type: String
        }
      ]
    });


const Product = mongoose.model('Recipe', recipeSchema);

module.exports = Product;
