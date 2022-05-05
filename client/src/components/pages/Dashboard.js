import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function Dashboard() {
  const { data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];
  console.log(recipes);

  return (
    <div>
      <h1>Dashboard</h1>
      {recipes?.map((recipe) => (
        <div>
          <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Name: {recipe.name}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h3>Instructions:</h3>
              <p>{recipe.instructions}</p>
            </Typography>

            {/* // TODO: bring in certian properties for API to Function. */}

            {/* <h3>Tags:</h3>
          <p>{recipe.tags}</p> */}

            <Typography variant="body2">
              <h3>Servings:</h3>
              <p>{recipe.servings}</p>

              <br />

              <h3>Total Time:</h3>
              <p>{recipe.time}</p>
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Ingredients:
              {recipe.ingredients}
            </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
