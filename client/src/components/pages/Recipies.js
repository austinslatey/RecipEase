import React,{useState} from "react";
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { lightBlue } from "@mui/material/colors";
import { color } from "@mui/system";
import { useMutation } from "@apollo/client";
import { ADD_TO_RECIPE, ADD_TO_GROCERY_LIST } from '../../utils/mutations';


// recipes 
export default function Recipies() {
  const [formState, setFormState] = useState({name:"",instructions:[],tags:[""],servings:"",time:"",ingredients:[], Recipies:[]})
  const [addRecipe, {error}] = useMutation(ADD_TO_RECIPE)
  const [ addGroceryList, {error_two}] = useMutation(ADD_TO_GROCERY_LIST)
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
    }
    catch{
      console.log(error)
    }
  };

  const handleFormSubmitAddToGroceryList = async (event) => {
    event.preventDefault();
    console.log(formState)
    try{
      for (let i=0; i<formState.Recipies.length; i++){
      const mutationResponseAddtoGroceryList = await addGroceryList({
        variables: { 
          Recipies: formState.Recipies, 
          }
      });
    }}
    catch{
      console.log(error)
    }
  };

  const handleFormSubmitGroceryList = async (event) =>{
    event.preventDefault();
    const nextRecipes= document.querySelector("#Recipes").value.trim()
    if (nextRecipes === ""){
      return
    }
    setFormState({
      ...formState,
      Recipies: [...formState.Recipies, nextRecipes]
    })
    document.querySelector("#Recipes").value="";
  }

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
    console.log(formState)
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
        <h1>Add A Recipe</h1>
        <div style={{
                position: 'relative',
                top: 5,
                right: 75,
                backgroundColor: lightBlue
          }}>
        <div style={{
                position: 'relative',
                top: 75,
                right: 75,
          }}>
          <h4>Name</h4>
        <textarea onChange={onChange} id='name'></textarea>
        </div>
        <div style={{
                position: 'relative',
                top: 175,
                right: 75,
          }}>
          <h4>Add Ingredient</h4>
        <textarea id='ingredient'></textarea>
        <Button onClick={handleFormSubmitIngredient} color="primary" variant="contained" hfre="#add-ingredient" style={{
                position: 'relative',
                right: 120,
                top: 25,
          }} >Add </Button>
        </div>
        <div style={{
                position: 'relative',
                bottom: 130,
                left: 250,
                backgroundColor: lightBlue
          }}>
          <h4> Instructions</h4>
          <form id='instructions-test'>
            <textarea id='instructions' style={{
                    width: 300,
                    height: 300
            }}></textarea>
            <Button onClick={handleFormSubmitInstructions} color="primary" variant="contained" hfre="#add-ingredient" style={{
                position: 'relative',
                height: 55,
                width: 175,
                bottom: 150,
                left: 100
          }} >Add Instructions</Button>
          </form>
        </div>
        <div style={{
                position: 'relative',
                bottom: 70,
                left: 250,
                backgroundColor: lightBlue
          }}>
          <h4> Servings</h4>
        <textarea onChange={onChange} id='Servings'style={{
                borderRadius: 25
          }}></textarea>
        </div>
        <div style={{
                position: 'relative',
                bottom: 170,
                right: 75
          }}>
          <h4> Time to Cook</h4>
        <textarea onChange={onChange} id='TimeToCook' style={{
                borderRadius: 25
          }}></textarea>
        </div>
        <Button onClick={handleFormSubmit} color="primary" variant="contained" hfre="#add-ingredient" style={{
                position: 'relative',
                height: 55,
                width: 175,
                bottom: 150,
                left: 100
          }} >Save Recipie</Button>
          <div style={{
                position: 'relative',
                bottom: 170,
                right: 75
          }}>
          <h4> Time to Cook</h4>
        <textarea onChange={onChange} id='Recipes' style={{
                borderRadius: 25
          }}></textarea><Button onClick={handleFormSubmitAddToGroceryList} color="primary" variant="contained" style={{
            position: 'relative',
            height: 55,
            width: 175,
            bottom: 150,
            left: 100
      }} >Add Recipe To GroceryList</Button>
        </div>
          </div>
      </Grid> 
    </Box>
  );
}