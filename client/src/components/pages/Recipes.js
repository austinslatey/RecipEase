import React,{useState} from "react";
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { lightBlue } from "@mui/material/colors";
// import { color } from "@mui/system";
import { useMutation } from "@apollo/client";
import { ADD_TO_RECIPE} from '../../utils/mutations';


// recipes 
export default function Recipies() {
  const [formState, setFormState] = useState({name:"",instructions:[],tags:[""],servings:"",time:"",ingredients:[]})
  const [addRecipe, {error}] = useMutation(ADD_TO_RECIPE)
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
    try{
      const mutationResponse = await addRecipe({
        variables: { 
          name: formState.name, 
          instructions: formState.instructions, 
          tags: formState.tags, 
          servings: formState.servings, 
          time: formState.time, 
          ingredients: formState.ingredients }
        });
        console.log(mutationResponse)
    }
    catch{
      console.log(error)
    }
  };

  // const handleFormSubmitAddToGroceryList = async (event) => {
  //   event.preventDefault();
  //   console.log(formState)
  //   try{
  //     for (let i=0; i<formState.Recipies.length; i++){
  //     const mutationResponseAddtoGroceryList = await addGroceryList({
  //       variables: { 
  //         Recipies: formState.Recipies, 
  //         }
  //     });
  //   }}
  //   catch{
  //     console.log(error)
  //   }
  // };

  // const handleFormSubmitGroceryList = async (event) =>{
  //   event.preventDefault();
  //   const nextRecipes= document.querySelector("#Recipes").value.trim()
  //   if (nextRecipes === ""){
  //     return
  //   }
  //   setFormState({
  //     ...formState,
  //     Recipies: [...formState.Recipies, nextRecipes]
  //   })
  //   document.querySelector("#Recipes").value="";
  // }

  const handleFormSubmitInstructions = async (event) =>{
    event.preventDefault();
    const nextInstruction = document.querySelector("#instructions").value.trim()
    if (nextInstruction === ""){
      return
    }
    setFormState({
      ...formState,
      instructions: [...formState.instructions, nextInstruction]
    })
    document.querySelector("#instructions").value="";
  }

  const handleFormSubmitIngredient = async (event) =>{
    event.preventDefault();
    const nextIngredient = document.querySelector("#ingredient").value.trim()
    if (nextIngredient === ""){
      return
    }
    setFormState({
      ...formState,
      ingredients: [...formState.ingredients, nextIngredient]
    })
    document.querySelector("#ingredient").value="";
  }

  const onChange=(event) =>{
    // console.log(event.target)
    // console.log(event.target.value)
    const { id, value } = event.target;
    // console.log({id})
    // console.log({value})
    console.log(formState.name);
      setFormState({
        ...formState,
        [id]: value
      });
  };

  return (
    <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
      <Grid >
        <h1  style={{ marginLeft: 250}}>Add A Recipe</h1>
        <Grid  style={{
                position: 'relative',
                width:750,
                height: 550,
                backgroundColor: "lightblue",
                opacity: 10,
                padding: 10,
                borderRadius: 25
              }}>
          <h4 style={{ position: 'relative', left:60, fontFamily:"bold", color:"white"}}>Name</h4>
          <textarea onChange={onChange} id='name' style={{ 
                borderRadius: 25,
                padding:10}} >
                </textarea>
          <h4 style={{position: 'relative', left:20, fontFamily:"bold", color:"white"}}>Add Ingredient</h4>
        <textarea style={{ 
                borderRadius: 25,
                padding:10}}
                id='ingredient'></textarea>
        <Button onClick={handleFormSubmitIngredient} color="primary" variant="contained" hfre="#add-ingredient" style={{
                backgroundColor: "steelblue",
                position: 'relative',
                right: 130,
                top: 30
          }} >Add </Button>
          <div style={{
            position: 'relative',
            top: 35
          }}>
          <h4 style={{position: 'relative', left:50, fontFamily:"bold", color:"white"}}> Servings</h4>
          <textarea onChange={onChange} id='servings'style={{
                borderRadius: 25,
                padding:10
          }}></textarea>
        </div>
        <div style={{
                position: 'relative',
                top: 35
          }}>
          <h4 style={{position: 'relative', left:30, fontFamily:"bold", color:"white"}}> Time to Cook</h4>
        <textarea onChange={onChange} id='time' style={{
                borderRadius: 25,
                padding:10
          }}></textarea>
        </div>
        <div style={{
                position: 'relative',
                bottom: 410,
                left: 300,
          }}>
          <h4 style={{position: 'relative',  left:90, fontFamily:"bold", color:"white"}}> Instructions</h4>
          <form id='instructions-test'>
            <textarea id='instructions' style={{
                    width: 300,
                    height: 370,
                    borderRadius: 25,
                    padding: 10
            }}></textarea>
            <Button onClick={handleFormSubmitInstructions} color="primary" variant="contained" hfre="#add-ingredient" style={{
                backgroundColor: "steelblue",
                position: 'relative',
                height: 55,
                width: 175,
                top: 40,
                right: 235
          }} >Add Instructions</Button>
          </form>
        </div>
        <Button onClick={handleFormSubmit} variant="contained" hfre="#add-ingredient" style={{
                borderRadius: 25,
                fontSize: 20,
                fontWeight: "bolder",
                backgroundColor: "lightBlue",
                position: 'relative',
                height: 55,
                width: 175,
                bottom: 325,
                left: 275
          }} >Save Recipe</Button>
          </Grid>
      </Grid> 
    </Box>
  );
}