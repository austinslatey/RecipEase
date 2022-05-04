import React from "react";


import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../../utils/queries';


export default function Dashboard() {
  const { data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];
  console.log(recipes);

  return (
    <div>
      <h1>Dashboard</h1>
      {recipes?.map(recipe => (
      <div>
        <h2>Name: {recipe.name}</h2>
        <ul>
          <li>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
          </li>
          <li>
            <h3>Tags:</h3>
            <p>{recipe.tags}</p>
          </li>
          <li>
            <h3>Servings:</h3>
            <p>{recipe.servings}</p>
          </li>
          <li>
            <h3>Total Time:</h3>
            <p>{recipe.time}</p>
          </li>
          <li>
            <h3>Ingredients:</h3>
            <p>{recipe.ingredients}</p>
          </li>
        </ul>
      </div>
      ))}
    </div>
    );
    
} 

