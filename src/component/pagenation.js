import * as React from 'react';
import { Pagination } from '@mui/material';
import style from '../style.module.css'
import { memo } from 'react';


const Pagenation=memo((page)=> {

    const{count,amount,change,numbercolor}=page

    return(
        <Pagination
       count={Math.ceil(count.length/amount)}
       color='primary'
       onChange={change}
       className={style.page2}
       page={numbercolor}
       />
    )
})

export default Pagenation;