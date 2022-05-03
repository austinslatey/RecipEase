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
      {recipes?.map(recipe=>(
        <div>
          <p>name: {recipe.name}</p>
          <p></p>
          <p></p>
        </div>
      ))}
    </div>
  );
} 