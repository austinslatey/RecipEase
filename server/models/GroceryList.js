const mongoose = require('mongoose');

const { Schema } = mongoose;

const GroceryListSchema = new Schema({
  recipe: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  ]
});

const GroceryList = mongoose.model('GroceryList', GroceryList);

module.exports = GroceryList;
