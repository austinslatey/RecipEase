const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe, GroceryList } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me:  async (parent, args, context) => {
            if (context.user){
            const userData = await User.findOne({_id: context.user._id})
              .select('-__v -password')

              return userData;
            }

            throw new AuthenticationError('Not logged in')
        },
        getOneUser: async (parent, args) => {
            return await User.findOne();
        },
        getAllUsers: async (parent) => {
            return await User.find();
        },
        getUserRecipes: async (parent, { _id }) => {
            return await Recipe.findById(_id);
        },
        getAllRecipes: async (parent) => {
            return await Recipe.find()
        },
        getUserGroceryList: async (parent, { _id }) => {
            return await GroceryList.findById(_id);
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
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
            return await User.findByIdAndUpdate({ _id: args._id }, { userName: args.userName }, { new: true });
        }
    }
}

module.exports = resolvers;