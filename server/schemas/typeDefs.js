// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type Category {
//     _id: ID
//     name: String
//   }

//   type Ingredient {
//     _id: ID
//     name: String
//     quantity: Int
//     price: Float
//     category: Category
//   }

//   type Recipe {
//     _id: ID
//     name: String
//     ingredients: [Ingredient]
//   }

//   type User {
//     _id: ID
//     firstName: String
//     lastName: String
//     email: String
//     recipes: [Recipe]
//   }

//   type Auth {
//     token: ID
//     user: User
//   }

//   type Query {
//     categories: [Category]
//     ingredients(category: ID, name: String): [Ingredient]
//     ingredients(_id: ID!): Ingredient
//     user: User
//     recipes(_id: ID!): Recipe
//   }

//   type Mutation {
//     addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
//     addRecipe(ingredients: [ID]!): Recipe
//     updateUser(firstName: String, lastName: String, email: String, password: String): User
//     updateRecipe(_id: ID!, quantity: Int!): Recipe
//     login(email: String!, password: String!): Auth
//   }
// `;

// module.exports = typeDefs;
