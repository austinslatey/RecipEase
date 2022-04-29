// const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe, GroceryList} = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args) => {
            return await User.find();
        },
        recipe: async (parent, { _id }) => {
            return await Recipe.findById(_id);
          },
    },
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          return user ;
        },
        addRecipe: async (parent, args) => {
            const recipe = await Recipe.create(args);
            return recipe;
        },
        updateUser: async (parent, args) => {
            return await User.findByIdAndUpdate(user._id, args, { new: true });
        },
        updateRecipe: async (parent, args) => {
            return await Recipe.findByIdAndUpdate(recipe._id, args, { new: true });
        }
    }
}

module.exports = resolvers;