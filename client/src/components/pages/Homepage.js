import * as React from 'react'
import { Modal } from '@mui/material';
import { Link } from '@mui/material';
// import Login from '../pages/Login'
// import SignUp from '../pages/SignUp'
import homepageImg from '../../Assets/Images/HomepageImg.jpg'
import { Box, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Homepage() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box marginTop={3} marginBottom={3} sx={{ minHeight: "calc(100vh - 40px)", backgroundColor: "#90E0EF", borderTopLeftRadius: "8%", borderBottomRightRadius: "8%" }}>
        <Grid container direction="column">
          <Grid item xs={12} marginTop={3} alignSelf="center">
            <Typography variant="h2" sx={{ minWidth: '100%' }}>RecipEase</Typography>
          </Grid>
          <Grid item xs={12} marginTop={3} alignSelf="center">
            <Button variant="contained" size='large' onClick={handleOpen}>Get Started!</Button>
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
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                            New user? 
                        </Typography>
                        <Button id='modal-modal-description' sx={{ mt: 2 }}>
                          <Link href="#SignUp">Sign Up!</Link>
                        </Button>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Already Signed Up? 
                        </Typography>
                        <Button id='modal-modal-description' sx={{ mt: 2 }}>
                          <Link href="#Login">Login!</Link>
                        </Button>
                    </Box>
                </Modal>

      </Box>
    </ThemeProvider>
  );
}

export default Homepage