import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button,Grid} from "@mui/material";
import style from '../style.module.css'
import { memo } from "react";

const Areaselect=memo((code)=> {

    const{areacode,change,change2,expanded}=code

    return(
        <Grid container>
<Grid item xs={12} >
<Accordion expanded={expanded} onChange={change2}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography variant='h6'> <strong>エリアを選択</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>

  <Grid container>

{areacode.map((item,i)=>(
  
  <div className={style.btn2} key={i}>
    <Button variant="contained" color='secondary' size="small" key={i} className={style.btn3} onClick={change} id={item.code} value={item.name}>{item.name}</Button>
  </div>

))}
  </Grid>

        </AccordionDetails>
      </Accordion>

  </Grid>
  </Grid>
    )
    
})

export default Areaselect;