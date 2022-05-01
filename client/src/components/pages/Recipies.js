import React from "react";
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import './style.css';
import { lightBlue } from "@mui/material/colors";
import { color } from "@mui/system";
export default function Recipies() {
  return (
    <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
      <Grid >
        <h1>Add A Recipie</h1>
        <div style={{
                position: 'relative',
                top: 5,
                right: 75,
          }}>
        <div style={{
                position: 'relative',
                top: 75,
                right: 75,
          }}>
          <h4>Name</h4>
        <textarea id='Name'></textarea>
        </div>
        <div style={{
                position: 'relative',
                top: 175,
                right: 75,
          }}>
          <h4>Add Ingredient</h4>
        <textarea id='ingredient'></textarea>
        <Button color="primary" variant="contained" hfre="#add-ingredient" style={{
                position: 'relative',
                right: 125,
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
        <textarea id='Instructions' style={{
                  width: 300,
                  height: 300
          }}></textarea>
        </div>
        <div style={{
                position: 'relative',
                bottom: 70,
                left: 250,
                backgroundColor: lightBlue
          }}>
          <h4> Servings</h4>
        <textarea id='Servings'style={{
                borderRadius: 25
          }}></textarea>
        </div>
        <div style={{
                position: 'relative',
                bottom: 170,
                right: 75
          }}>
          <h4> Time to Cook</h4>
        <textarea id='TimeToCook' style={{
                borderRadius: 25
          }}></textarea>
        </div>
        <Button color="primary" variant="contained" hfre="#add-ingredient" style={{
                position: 'relative',
                height: 55,
                width: 175,
                bottom: 150,
                left: 100
          }} >Save Recipie</Button>
          </div>
      </Grid> 
    </Box>
  );
}