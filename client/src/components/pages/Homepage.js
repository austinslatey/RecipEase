import * as React from 'react'
import homepageImg from '../../Assets/Images/HomepageImg.jpg'
import { Box, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box marginTop={3} marginBottom={3} sx={{ minHeight: "calc(100vh - 40px)", backgroundColor: "#90E0EF", borderTopLeftRadius: "8%", borderBottomRightRadius: "8%" }}>
        <Grid container direction="column">
          <Grid item xs={12} marginTop={3} alignSelf="center">
            <Typography variant="h2" sx={{ minWidth: '100%' }}>RecipEase</Typography>
          </Grid>
          <Grid item xs={12} marginTop={3} alignSelf="center">
            <Button variant="contained" size='large' href='#SignUp'>Get Started!</Button>
          </Grid>
        </Grid>
        <Grid marginTop={10} container direction="row">
          <Grid item xs={6}>
            <ol>
              <li><Typography variant="h4" mt={4} ml={2} sx={{ minWidth: '100%' }}> Sign Up / Log In </Typography></li>
              <li><Typography variant="h4" mt={4} ml={2} sx={{ minWidth: '100%' }}> Create / Import Recipe </Typography></li>
              <li><Typography variant="h4" mt={4} ml={2} sx={{ minWidth: '100%' }}> Save Recipe </Typography></li>
              <li><Typography variant="h4" mt={4} ml={2} sx={{ minWidth: '100%' }}> Add Recipes to Grocery List </Typography></li>
              <li><Typography variant="h4" mt={4} ml={2} sx={{ minWidth: '100%' }}> Export List! </Typography></li>
            </ol>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: '40vw', minWidth:'30vw' }}>
              <CardMedia
                component="img"
                height="100%"
                image={homepageImg}
                alt="Food Image"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Homepage