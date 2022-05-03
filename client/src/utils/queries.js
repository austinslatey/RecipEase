import { gql } from "@apollo/client";

export const QUERY_RECIPES = gql`
query {
    recipes {
        name 
        instructions
        tags
        servings
        time
        ingredients
    }
}
`;