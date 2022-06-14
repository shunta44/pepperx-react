import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Card, CardContent, Container, Grid} from "@mui/material";
import style from '../style.module.css'
import { useMemo,memo } from "react";

const Areaselect=memo((code)=> {
  console.log('select');

    const{areacode,change,change2,expanded}=code

    // 上を書かない場合のpropsへのアクセス
    // console.log(code.areacode)
    // console.log(code.change)

    return(
        <Grid container>
<Grid item xs={12} >
<Accordion expanded={expanded} onChange={change2}>
      {/* <Accordion expanded='true'> */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography variant='h6'> <strong>エリアを選択</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
          {/* <Card> */}

  <Grid container>

{areacode.map((item,i)=>(
  
  <div className={style.btn2} key={i}>
    <Button variant="contained" color='secondary' size="small" key={i} className={style.btn3} onClick={change} id={item.code} value={item.name}>{item.name}</Button>
  </div>

))}
  </Grid>

{/* </Card> */}
          {/* </Typography> */}
        </AccordionDetails>
      </Accordion>


  </Grid>
  </Grid>
    )
    
})

export default Areaselect;