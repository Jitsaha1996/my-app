import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Chip, Typography } from '@mui/material';

import SimpleAccordion from './SimpleAccordian';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import BottomAppBar from './Footer';


export default function ContainerForHome() {
  console.log("window",window.innerWidth);
  return (
    <React.Fragment>

      <CssBaseline />
      <Container maxWidth="xl" sx={{ backgroundImage: "linear-gradient(to bottom right, red, #FFFF33)" }} >
        <Box sx={{ backgroundImage: "linear-gradient(to bottom right, red, #FFFF33)", marginTop: "5px", display: "flex", flexDirection: "row" }} >
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%", paddingTop: "40px" }}>
            <Box sx={{ padding: "25px", }}>
              <Typography sx={{ fontSize: "2rem", color: "white" }}>
                Hey , I'am  Jit Saha</Typography>
            </Box>
            <Box sx={{ padding: "25px", height: "57%" }}>
              <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }}>
                Full Stack Developer from India ,Working in TCS .
                Using React js in Front End and Node js in BackEnd</Typography>
              {window.innerWidth>400?(
                <Box sx={{display: "flex", flexDirection: "column",justifyContent:"center ",alignItems:"center" ,paddingLeft:"10px"}}>
                <Box sx={{display: "flex", flexDirection: "row",justifyContent:"center ",alignItems:"center",gap:"5px",paddingTop:"20px",paddingLeft:"85px"}} >
                <AttachEmailIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}/>
                <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}>
                
                <a href="mailto:sahajit1996@gmail.com" target="_blank" rel="noreferrer">sahajit1996@gmail.com</a></Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row",justifyContent:"center ",alignItems:"center",gap:"5px",paddingTop:"20px"}} >
                <LocalPhoneIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}/>
                <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}>
                
                <a href="tel:7980636969" target="_blank" rel="noreferrer">7980636969</a></Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row",justifyContent:"center ",alignItems:"center",gap:"5px",paddingTop:"20px",paddingLeft:"47px"}} >
                <LinkedInIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}/>
                <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}>
                
                <a href="https://www.linkedin.com/in/jit-saha-869201154/" rel="noreferrer" target="_blank">jit-saha-869201154</a></Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row",justifyContent:"center ",alignItems:"center",gap:"5px",paddingTop:"20px",paddingLeft:"25px"}} >
                <GoogleIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}/>
                <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}>
                
                <a rel="noreferrer" href="https://www.google.com/search?q=jit+saha&oq=jit+saha&aqs=chrome..69i57j0i10i22i30j0i15i22i30j0i390j69i60l2.1642j0j4&sourceid=chrome&ie=UTF-8" target="_blank">Google Account</a></Typography>
                </Box>
                </Box>
              ):(<Box sx={{display: "flex", flexDirection: "column",justifyContent:"center ",alignItems:"center" ,paddingLeft:"10px"}}>
              <Box sx={{display: "flex", flexDirection: "row",justifyContent:"center ",alignItems:"center",gap:"5px",paddingTop:"20px",paddingLeft:"85px"}} >
              <AttachEmailIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}/>
              <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}>
              
              <a href="mailto:sahajit1996@gmail.com" target="_blank" rel="noreferrer">sahajit1996@gmail.com</a></Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "row",justifyContent:"center ",alignItems:"center",gap:"5px",paddingTop:"20px"}} >
              <LocalPhoneIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}/>
              <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}>
              
              <a href="tel:7980636969" target="_blank" rel="noreferrer">7980636969</a></Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "row",justifyContent:"center ",alignItems:"center",gap:"5px",paddingTop:"20px",paddingLeft:"7px"}} >
              <LinkedInIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}/>
              <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}>
              
              <a href="https://www.linkedin.com/in/jit-saha-869201154/" rel="noreferrer" target="_blank">jit-saha-869201154</a></Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "row",justifyContent:"center ",alignItems:"center",gap:"5px",paddingTop:"20px",paddingLeft:"5px"}} >
              <GoogleIcon sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}/>
              <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif"  }}>
              
              <a rel="noreferrer" href="https://www.google.com/search?q=jit+saha&oq=jit+saha&aqs=chrome..69i57j0i10i22i30j0i15i22i30j0i390j69i60l2.1642j0j4&sourceid=chrome&ie=UTF-8" target="_blank">Google Account</a></Typography>
              </Box>
              </Box>)}
                

            </Box>

          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%", paddingTop: "40px" }}>
            <Box sx={{ width: "80%", padding: "20px", }}>
              <img alt='jit saha' width="100%" height="100%" src={require('../static/assets/images/jit1.jpeg')} />
            </Box>
          </Box>

        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", }}>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", paddingTop: "20px" }}>
            <Typography sx={{ fontSize: "2rem", color: "white" }}>Skill Set</Typography>
          </Box>


        </Box>
        <Box sx={{ display: "flex", flexDirection: "row",width: "100%" }}>


          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", paddingTop: "20px" }}>
            <Typography sx={{ fontSize: "1.5rem", color: "white" }}>Primary:</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", padding: "10px", gap: "5px", flexWrap: "wrap" }}>
              <Chip label="React js" color="primary" variant="filled" />
              <Chip label="Java Script" color="primary" variant="filled" />
              <Chip label="TypeScript" color="primary" variant="filled" />
              <Chip label="Angular" color="primary" variant="filled" />
              <Chip label="Html" color="primary" variant="filled" />
              <Chip label="Css" color="primary" variant="filled" />
            </Box>
          </Box>
          {window.innerWidth>400?(
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", paddingTop: "20px" }}>
              <Typography sx={{ fontSize: "1.5rem", color: "white" }}>Secondary:</Typography>
              <Box sx={{ display: "flex", flexDirection: "row", padding: "10px", gap: "5px", flexWrap: "wrap" }}>
                <Chip label="Node js" color="secondary" variant="filled" />
                <Chip label="AWS services" color="secondary" variant="filled" />
                <Chip label="Azure" color="secondary" variant="filled" />
                <Chip label="Dyanamo Db" color="secondary" variant="filled" />
                <Chip label="Serverless" color="secondary" variant="filled" />
                <Chip label="Express" color="secondary" variant="filled" />
              </Box>
            </Box>
          ):(  <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", paddingTop: "50px" }}>
          <Typography sx={{ fontSize: "1.5rem", color: "white" }}>Secondary:</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", padding: "10px", gap: "5px", flexWrap: "wrap" }}>
            <Chip label="Node js" color="secondary" variant="filled" />
            <Chip label="AWS services" color="secondary" variant="filled" />
            <Chip label="Azure" color="secondary" variant="filled" />
            <Chip label="Dyanamo Db" color="secondary" variant="filled" />
            <Chip label="Serverless" color="secondary" variant="filled" />
            <Chip label="Express" color="secondary" variant="filled" />
          </Box>
        </Box>)}
        
        </Box>


        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", paddingTop: "20px" }}>
          <Typography sx={{ fontSize: "2rem", color: "white" }}>Personal Details</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <SimpleAccordion/>
          </Box>
          <Box sx={{display:"flex",flexDirection:"row",width:"100%"}}>
            <BottomAppBar/>

          </Box>
    </Container>
    </React.Fragment >
  );
}