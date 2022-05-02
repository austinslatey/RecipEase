const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Recipe {
    _id: ID
    instructions: [String]
    tags: [String]
    servings: String
    time: String
    name: String
    ingredients: [String]
  }

  type User {
    _id: ID
    userName: String
    email: String
    recipes: [Recipe]
  }

  type Auth {
    token: ID!
    user: User
  }

  type GroceryList {
    recipe: [Recipe]
  }

  type Query {
    getOneUser(userName: String!): User
    getAllUsers: [User]
    getAllRecipes: [Recipe]
    getUserRecipes(_id: ID!): [Recipe]
    getUserGroceryList(_id: ID!): GroceryList 
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addRecipe(name: String!, instructions: [String]!, tags: [String], servings: String, time: String, ingredients: [String]) : Recipe
    updateUser(userName: String, email: String, password: String): User
    updateRecipe(_id: ID!, instructions: String!, tags: String, servings: String, time: String, ingredients: String!): Recipe
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
