// const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe, GroceryList} = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getOneUser: async (parent, args) => {
            return await User.findOne();
        },
        getAllUsers: async (parent) => {
            return await User.find();
        },
        getUserRecipes: async (parent, { _id }) => {
            return await Recipe.findById(_id);
        },
        getAllRecipes: async(parent) => {
            return await Recipe.find()
        },
        getUserGroceryList: async (parent, { _id }) => {
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
        updateUser: async (parent, args) => {
            return await User.findByIdAndUpdate({_id:args._id}, {userName:args.userName}, { new: true });
        }
    }
}

module.exports = resolvers;