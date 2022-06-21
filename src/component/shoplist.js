import * as React from 'react';
import style from '../style.module.css'
import MediaQuery from 'react-responsive';
import { Grid } from "@mui/material";
import { memo } from 'react';

const Shoplist=memo((shop)=> {

    const{list,page}=shop

  const per = 10;


    return(
        <ul className={style.shoplist}>

<Grid container className={style.kkk}>
{list.slice(page,page+per).map((item,i)=>(
  
  
  <Grid item xs={12} sm={6} key={i} >
<li key={i}> 
    <div className={style.main}>

    <MediaQuery query='(min-width:961px)'>
<img src={item.photo.pc.l} alt="" />
    </MediaQuery>
<MediaQuery query='(max-width:960px)'>
<img src={item.photo.mobile.l} alt="" />
</MediaQuery>
<div className={style.url}>
<p>{item.name}</p>
<br /><br /><br />
<a href={item.urls.pc} target='branch'>詳細を確認</a>
</div>

    </div>

    <div className={style.item}>
<p> <strong>住所→</strong> {item.address}</p>
<p><strong>アクセス→</strong>{item.access}</p>
<p><strong>飲み放題→</strong>{item.free_drink}</p>
<p><strong>食べ放題→</strong>{item.free_food}</p>
<p><strong>23時以降の営業→</strong>{item.midnight}</p>
<p><strong>予算→</strong>{item.budget.average}</p>
<p><strong>営業時間→</strong>{item.open}</p>
<p><strong>駐車場→</strong>{item.parking}</p>
<p><strong>個室→</strong>{item.private_room}</p>
    </div>
 
  </li> 
  </Grid>

))}
</Grid>
</ul>
    )
});

export default Shoplist;