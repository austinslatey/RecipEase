import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal'
import { Typography } from '@mui/material';
import { Link } from '@mui/material';

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

export default function Footer() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    minHeight:'20px',
                    textAlign: 'center',
                    backgroundColor: "#90E0EF"
                    // backgroundColor: (theme) =>
                    //     theme.palette.mode === 'light'
                    //         ? theme.palette.grey[200]
                    //         : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="xs">
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={handleOpen}>Contact Us</Button>
                        <Button target="_blank" href='https://github.com/austinslatey/RecipEase'>GitHub</Button>
                        <Button>Download</Button>
                    </ButtonGroup>
                </Container>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Developer E-Mail Addresses
                        </Typography>
                        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                            Johnathan Shields : <Link href="mailto:johnathan.shields.95@gmail.com">johnathan.shields.95@gmail.com</Link>
                        </Typography>
                        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                            Kyler Mclachlan : <Link href="mailto:kyler.mclachlan@gmail.com">kyler.mclachlan@gmail.com</Link>
                        </Typography>
                        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                            Austin Slatey : <Link href="mailto:austinslater58@gmail.com">austinslater58@gmail.com</Link>
                        </Typography>
                    </Box>
                </Modal>
            </Box>
    );
}