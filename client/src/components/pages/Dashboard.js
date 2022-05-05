import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";

export default function Dashboard() {
  const { data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];
  console.log(recipes);

  return (
    <div style={{ minHeight: "calc(100vh - 40px)" }}>
      <h1>Dashboard</h1>
      
        {recipes?.map((recipe) => (
          <Card sx={{ minWidth: 275 }}>
          
            <CardContent>
              <Typography variant="h5" component="div">
                {recipe.name}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Instructions: {recipe.instructions}
              </Typography>

              <Typography variant="body2">
                Tags:{recipe.tags}
                <br />
                Servings:
                {recipe.servings}
                <br />
                Total Time:{recipe.time}
                Ingredients: {recipe.ingredients}
              </Typography>
            </CardContent>
            {/* plans on future dev, code is in seperate branch */}
            {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
        ))}
      
    </div>
  );
}
