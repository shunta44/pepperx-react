import { memo } from "react";
import MediaQuery from 'react-responsive';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CloseIcon from '@mui/icons-material/Close';
import style from '../style.module.css'

const Fotter=memo(()=>{


return(
    <div className={style.toppage}>
    <MediaQuery query='(min-width:601px)'>
      <FastfoodIcon fontSize='large' className={style.icon}/>
      <CloseIcon fontSize='large' className={style.icon}/>
      <RestaurantIcon fontSize='large' className={style.icon}/>
<h1>食べたいお店が見つかるサイト</h1>
<h2>最初にエリアを選択してください</h2>
      </MediaQuery>


<MediaQuery query='(max-width:600px)'>
<FastfoodIcon fontSize='medium' className={style.iconm}/>
<CloseIcon fontSize='medium' className={style.iconm}/>
<RestaurantIcon fontSize='medium' className={style.iconm}/>
<h3>食べたいお店が見つかるサイト</h3>
<h4>最初にエリアを選択してください</h4>
      </MediaQuery>
    </div>
)

})

export default Fotter;