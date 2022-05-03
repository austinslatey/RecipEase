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
    recipe(_id: ID!): Recipe
    recipes:[Recipe]
    me: User
    getOneUser(userName: String!): User
    getAllUsers: [User]
    getAllRecipes: [Recipe]
    getUserRecipes(_id: ID!): [Recipe]
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addRecipe(name: String!, instructions: [String]!, tags: [String], servings: String, time: String, ingredients: [String]) : Recipe
    updateUser(userName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    # updateRecipe(_id: ID!, instructions: String!, tags: String, servings: String, time: String, ingredients: String!): Recipe
    # addRecipetoGroceryList(_id: ID!)
  }
`;

module.exports = typeDefs;
