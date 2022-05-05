import * as React from "react";
import Card from "@mui/material/Card";
// import { Box } from '@mui/material';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";

export default function Dashboard() {
  const { data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];
  console.log(recipes);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <h1>Dashboard</h1>

      {recipes?.map((recipe) => (
        <Card sx={{ maxWidth: "40vw", minWidth: "10vw" }}>
          <CardContent>
            <Typography variant="h2" component="div">
              {recipe.name}
            </Typography>

            <Typography sx={{ mb: 2.0 }} color="text.secondary">
              Instructions: {recipe.instructions}
            </Typography>

            <Typography variant="body2">
              Tags:{recipe.tags}
              Servings:{recipe.servings}
              Total Time:{recipe.time}
              Ingredients: {recipe.ingredients}
            </Typography>
          </CardContent>

          {/* plans on future dev, code is in seperate branch */}
          <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>
      ))}
    </ThemeProvider>
  );
}
