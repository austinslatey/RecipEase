// const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe, GroceryList} = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args) => {
            return await User.find();
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          return { user };
        }
    }
}

module.exports = resolvers;