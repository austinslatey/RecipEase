const mongoose = require('mongoose');

const { Schema } = mongoose;

const GroceryListSchema = new Schema({
  Recipe: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  ]
});

const GroceryList = mongoose.model('GroceryList', GroceryList);

module.exports = Order;
