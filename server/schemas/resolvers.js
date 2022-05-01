// const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe, GroceryList} = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args) => {
            return await User.findOne();
        },
        recipes: async (parent, { _id }) => {
            return await Recipe.findById(_id);
        },
        groceryList: async (parent, { _id }) => {
            return await GroceryList.findById(_id);
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          return user ;
        },
        addRecipe: async (parent, args) => {
            console.log('test');
            console.log(args);
            const recipe = await Recipe.create(args);
            return recipe;
        },
        addRecipetoGroceryList: async (parent, args) => {
            console.log('test');
            console.log(args);
            const groceryList = await GroceryList.create(args);
            return groceryList;
        },
        updateUser: async (parent, args) => {
            return await User.findByIdAndUpdate({_id:args._id}, {userName:args.userName}, { new: true });
        },
    }
}

module.exports = resolvers;