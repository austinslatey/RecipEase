const mongoose = require('mongoose');

const { Schema } = mongoose;
// schema
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


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

