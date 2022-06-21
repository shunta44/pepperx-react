import * as React from 'react';
import { Button,Grid } from "@mui/material";
import MediaQuery from 'react-responsive';
import style from '../style.module.css'
import { memo } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Conditionbutton=memo((btn)=> {

    const{val,change,click}=btn

    return(
        <Grid container>

<Grid item xs={12} sm={9} md={10} >
<div className={style.btn}>
<MediaQuery query='(max-width:600px)'>
<Button variant='contained' size='small' onClick={click} value={10}>個室ありで絞る</Button>
<Button variant='contained' size='small' onClick={click} value={20}>食べ放題ありで絞る</Button>
<Button variant='contained' size='small' onClick={click} value={30}>飲み放題ありで絞る</Button>
<Button variant='contained' size='small' onClick={click} value={40}>駐車場ありで絞る</Button>
<Button variant='contained' size='small' onClick={click} value={50}>ランチありで絞る</Button>
<Button variant='contained' color='error' size='small' onClick={click} value={60}>条件をリセットする</Button>
</MediaQuery>
<MediaQuery query='(min-width:601px)'>
<Button variant='contained'  onClick={click} value={10}>個室ありで絞る</Button>
<Button variant='contained' onClick={click} value={20}>食べ放題ありで絞る</Button>
<Button variant='contained' onClick={click} value={30}>飲み放題ありで絞る</Button>
<Button variant='contained' onClick={click} value={40}>駐車場ありで絞る</Button>
<Button variant='contained' onClick={click} value={50}>ランチありで絞る</Button>
<Button variant='contained' color='error' onClick={click} value={60}>条件をリセットする</Button>
</MediaQuery>
</div>

</Grid>

<Grid item xs={6} sm={3} md={2} >

<Box sx={{ minWidth: 120 }} className={style.select}>
      <FormControl fullWidth className={style.select2}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" color='success'>
  金額
        </InputLabel>
        <NativeSelect
          value={val}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={change}
          variant='filled'
          color='success'
          >
          <option value={0} >予算で絞る</option>
          <option value={10}>~1000円</option>
          <option value={20}>~2000円</option>
          <option value={30}>~3000円</option>
          <option value={40}>~5000円</option>
          <option value={50}>~10000円</option>
          <option value={60}>~20000円</option>
          <option value={70}>~30000円</option>
        </NativeSelect>
      </FormControl>
    </Box>

    </Grid>

</Grid>
    )
    
})

export default Conditionbutton;