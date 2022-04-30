import { useReducer } from "react";
import {
    ADD_TO_RECIPE,
    ADD_TO_GROCERY_LIST,
    REMOVE_FROM_RECIPE
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_RECIPE:
      return {
        ...state,
        recipe: [...action.ingredients],
      };

    case ADD_TO_GROCERY_LIST:
      return {
        ...state,
        categories: [...action.categories],
      };

    case REMOVE_FROM_RECIPE:
      return {
        ...state,
        currentCategory: action.currentCategory
      }  
      default:
        return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}

