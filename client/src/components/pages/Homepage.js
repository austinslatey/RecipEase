import * as React from 'react'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { borderRadius, height } from '@mui/system';


const theme = createTheme();

function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        {/* <Typography fontSize='2rem' >Profile</Typography> */}
        <Box container marginTop={3} marginBottom={3} sx={{ display:"flex", minHeight:"calc(100vh - 40px)", backgroundColor:"#90E0EF", borderTopLeftRadius:"10%", borderBottomRightRadius:"10%"}}>
        </Box>
    </ThemeProvider>
  );
}

export default Homepage