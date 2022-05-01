import { useReducer } from "react";
import {
  // reducers
    ADD_TO_RECIPE,
    ADD_TO_GROCERY_LIST,
    REMOVE_FROM_RECIPE
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_RECIPE:
      return {
        ...state,
        Recipe: [...action.recipes],
      };
      default:
        return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}

