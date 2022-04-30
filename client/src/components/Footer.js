import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';


export default function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    textAlign:'center',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="xs">
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button>Contact Us</Button>
                        <Button target="_blank" href='https://github.com/austinslatey/RecipEase'>GitHub</Button>
                        <Button>Download</Button>
                    </ButtonGroup>
                </Container>
            </Box>
         </Box>
    );
}