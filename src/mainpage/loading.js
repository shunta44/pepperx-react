import { memo } from "react";
import { Audio, BallTriangle, Bars,Circles,CirclesWithBar,Grid,Hearts,Oval,Puff,
    Rings,TailSpin,ThreeCircles,ThreeDots } from "react-loader-spinner";

import ReactLoading from "react-loading";

import style from '../style.module.css'


const Loading=memo(()=> {
console.log('ロード')


    return(
        <>
        <div className={style.load}>
        <ReactLoading type="spokes" color="black" className={style.icon}/>
        <h3>読み込み中...少々お待ちください</h3>
        </div>
        {/* <Audio color="red"/>
        <BallTriangle/>
        <Bars/>
        <Circles/>
        <CirclesWithBar/>
        <Grid/>
        <Hearts/>
        <Oval/>
        <Puff/>
        <Rings/>
        <TailSpin/>
        <ThreeCircles/>
        <ThreeDots/>

        <ReactLoading type="spin" color="red" delay={1000}/>
        <ReactLoading type="spinningBubbles"/>
        <ReactLoading type="blank"/>
        <ReactLoading type="balls"/>
        <ReactLoading type="bars"/>
        <ReactLoading type="bubbles"/>
        <ReactLoading type="cubes"/>
        <ReactLoading type="cylon"/> */}
        
        </>
    )
    
})

export default Loading;