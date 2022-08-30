import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';




import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';


const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export default function BottomAppBar() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square sx={{ pb: '50px' }}>


            </Paper>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer">
                        <LocalPhoneIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }} />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <LinkedInIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }} />
                    </IconButton>
                    <IconButton color="inherit">
                        <GoogleIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }} />
                    </IconButton>
                
            </Toolbar>
        </AppBar>
    </React.Fragment >
  );
}
