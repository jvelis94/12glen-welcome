import styles from '../styles/Faqs.module.css'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Faqs() {
  return (
    <div className={styles.pageContainer}>
        <h3>FAQs</h3>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>What are the check-out instructions?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                We aim to make the checkout process as painless as possible. We simply ask that the hot tub is covered and that the front/back doors are locked.
                <br/><br/>
                Our cleaning crew takes care of the garbage so no need to worry about that.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are the house rules?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
                <li>10 guests maximum</li>
                <li>Pets allowed</li>
                <li>Check-in after 4:00 PM</li>
                <li>Check-out before 11:00 AM</li>
                <li>No smoking indoors</li>
                <li>Self check-in with smart lock</li>
            </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}