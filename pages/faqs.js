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
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>What are the house rules?</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <ul>
                  <li>No smoking inside</li>
                  <li>No smoking or drinking while in the hot tub</li>
                  <li>Please try to limit food and drink to the common areas and not the bedrooms</li>
                  <li>Do not attempt to open any locked doors. These are private areas</li>
              </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>What are the check-out instructions?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                  <li>Check out is at 11am</li>
                  <li>Please leave the sink empty and load the dishwasher before you leave</li>
                  <li>The community requires that all garbage and recycling be taken to the community compactors. The address will be provided post booking</li>
                  <li>Close and lock all windows and exterior doors. Please only lock the smart lock of the front door</li>
                  <li>Lower heat in bedrooms and bathrooms to 65 degrees</li>
                  <li>Turn off all lights, ceiling fans, and other electrical devices.</li>
                  <li>Please place the hot tub in ECO mode </li>
              </ul>
            </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How do I place the hot tub in ECO mode?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Please hold the temperature and light button until the display shows &quot;Ec&quot;, and leave the temperature at 86 degrees</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>The hot tub water looks hazy, what do I do</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Please take a test strip located under the kitchen sink and follow the instructions. Usually haziness is the result of a chemical imbalance. Based on the reading on the strip, please place the appropriate chemicals in the water</Typography>
          </AccordionDetails>
        </Accordion>
    </div>
  );
}