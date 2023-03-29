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
            aria-controls="panel1b-content"
            id="panel1b-header"
          >
            <Typography>Why do I need to check in at the community gate prior to entering the house?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Our house is part of the Big Bass Lake Community, therefore all visitors, and even owners must have a valid car pass prior to settling into any property. Failure to check in prior to visiting any property can result in the community imposing a $500+ fine</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
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
            <Typography>Where is the check in gate?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>The address to the main check in gate is 1 Big Bass Drive, Clifton Township, PA</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2b-content"
            id="panel2b-header"
          >
            <Typography>Where are the community trash bins?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>The address to the community trash bins is Big Bass Lake Maintenance Office, Fox Farm Road, Clifton Township, PA</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2c-content"
            id="panel2c-header"
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
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>The hot tub is not heating up, how do I fix this?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>It is likely in Eco mode, which means it runs every 12 hours. To make it run continously, hold the temperature and light button until the display shows &quot;Ec&quot;. Please place the mode back to Ec when you are done </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>The hot tub water looks hazy, what do I do</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Please take a test strip located under the kitchen sink and follow the instructions. Usually haziness is the result of a chemical imbalance. Based on the reading on the strip, please place the appropriate chemicals in the water</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3b-content"
            id="panel3b-header"
          >
            <Typography>Fireplace best practices</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Prior to lighting a fire, please make sure the damper is open. The damper is a crank found on the inside of fireplace. It must be lifted to open the damper, and then lowered to close it</Typography>
          </AccordionDetails>
        </Accordion>
    </div>
  );
}