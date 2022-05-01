import { gql } from '@apollo/client';


// mutations
export const ADD_TO_RECIPE = gql`
  mutation addRecipe($name: String!, $instructions: [String]!, $tags: [String], $servings: String, $time: String, $ingredients: [String]) {
    addRecipe(name: $name, instructions: $instructions, tags: $tags, servings: $servings, time: $time, ingredients: $ingredients){
        _id
        instructions
        tags
        servings
        time
        name
        ingredients
        }
  }
`;

export const ADD_TO_GROCERY_LIST = gql`
  mutation addRecipetoGroceryList($_id: ID!) {
    addRecipetoGroceryList(_id: $_id){
      recipe
        }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

