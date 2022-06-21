import { memo } from "react";

import ReactLoading from "react-loading";

import style from './style.module.css'


const Loading=memo(()=> {

    return(
        <>
        <div className={style.load}>
        <ReactLoading type="spokes" color="black" className={style.icon}/>
        <h3>読み込み中...少々お待ちください</h3>
        </div>
        </>
    )
    
})

export default Loading;