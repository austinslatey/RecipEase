import * as React from "react";
import { useState, useRef } from "react";


// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";
// import { maxWidth } from "@mui/system";



export default function Edit () {
    // loading.. possible input into QUERY_RECIPES 
    const { data,  } = useQuery(QUERY_RECIPES);
    const recipes = data?.recipes || [];
    console.log(recipes);
    

    //getId and query recipe by id  line 49
    const [ edit, setEdit] = useState(false);
  const recipeName = useRef();

  const submitUpdate = () => {
    try {
      console.log(recipeName.current?.value);
      setEdit(false);
    }
    catch (err) {
      console.log(err);
    }
 }
    return (
        <div>
          <Card sx={{ minWidth: 100, maxWidth: 450}}>
          <CardContent>
            {/* <Typography variant="h3" component="div">  */}
            <input
            ref={recipeName}
            type='text'
            ></input>
            {/* </Typography> */}

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h3>Instructions:</h3>
              {recipe.instructions}
            </Typography>

            {/* // TODO: bring in certian properties for API to Function. */}

            {/* <h3>Tags:</h3>
          <p>{recipe.tags}</p> */}

            <Typography variant="body2">
              {/* <h3>Servings:</h3>
              <p>{recipe.servings}</p> */}

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
              <Button size="small" onClick={submitUpdate}>Submit</Button>
            </CardActions>
          </Card>
        </div>

    )
}