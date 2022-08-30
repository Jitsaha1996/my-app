import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export default function SimpleAccordion() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "80%", justifyContent: "center", alignItems: "center", gap: "5px", marginLeft: "10%", paddingBottom: "5%" }}>
            <Accordion sx={{ backgroundImage: "linear-gradient(to bottom right, red, yellow)", width: "80%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ marginLeft: "45%" }}>Qualification</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }}>
                        Secondary : Secured 80% marks from ganga Puri Siksha Sadan (H.S) (2012)
                        <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }}>Hiher Secondary : Secured 78% marks from Ganga Puri Siksha Sadan (H.S) (2014)</Typography>

                        <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }}>Graduation: Completed Bachelor of Technology (Btech) in Information TechnoLogy from GPSS (2019)</Typography>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundImage: "linear-gradient(to bottom right, red, yellow)", width: "80%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography sx={{ marginLeft: "45%" }}>Work Experince</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }}>
                        Working as a Frontend Developer in Tata Consulttancy Services (TCS) ( 2019- Present )
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundImage: "linear-gradient(to bottom right, red, yellow)", width: "80%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography sx={{ marginLeft: "45%" }}>Hobby</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }}>
                        I like to explore new places .
                    </Typography>
                    <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }}>
                        Making new foods.
                    </Typography>

                    <Typography sx={{ fontSize: "1rem", color: "white", fontFamily: "sans-serif" }}>
                        Playing Cricket
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </Box>
    );
}