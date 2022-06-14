// 関東・北海道など地方エリアごとにURL(ファイル)が変わるパターン

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Card } from '@mui/material';
import style from './style.module.css'
import { useReducer } from 'react';
import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router';
import { yellow } from '@mui/material/colors';
import MediaQuery from 'react-responsive';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CloseIcon from '@mui/icons-material/Close';

import Fotter from './firstcomponent/fotter'
import Areaselect from './firstcomponent/areaselect'
import Preselect from './firstcomponent/preselect'
import Provider from "./firstcomponent/globalstate";


const ll=(state,action)=>{

    switch(action.type){
        case 'location1':
            return{
                ...state,
                contents:action.value
            }
        case 'location2':
            return{
                ...state,
                contents2:action.value
            }

            case 'location3':
                return{
                ...state,
                contents3:action.value
                }
            case 'location4':
                return{
                ...state,
                contents4:action.value
                }
                
            case 'location5':
                return{
                ...state,
                contents5:action.value
                }
                
            case 'location6':
                return{
                ...state,
                contents6:action.value
                }
                
            case 'location7':
                return{
                ...state,
                contents7:action.value
                }
                
            case 'location8':
                return{
                ...state,
                contents8:action.value
                }

            case 'reset':
                return{
                    ...state,
                    contents:null,
                    contents2:null,
                    contents3:null,
                    contents4:null,
                    contents5:null,
                    contents6:null,
                    contents7:null,
                    contents8:null,
                    
                }
            case 'data':
                return{
                    // ...state,
                    data:action.value
                }

            default: return state;

    }


}

export default function BasicMenu() {

    const initial={
      data:[],
contents:null,
contents2:null,
contents3:null,
contents4:null,
contents5:null,
contents6:null,
contents7:null,
contents8:null,
    }

    const[anchorEl,dispach]=useReducer(ll,initial)

    // const history=useNavigate()

  // const open = Boolean(anchorEl.contents);
  // const open2 = Boolean(anchorEl.contents2);
  // const open3 = Boolean(anchorEl.contents3);
  // const open4 = Boolean(anchorEl.contents4);
  // const open5 = Boolean(anchorEl.contents5);
  // const open6 = Boolean(anchorEl.contents6);
  // const open7 = Boolean(anchorEl.contents7);
  // const open8 = Boolean(anchorEl.contents8);



//   const open2 = Boolean(anchorEl2);

// useEffect(()=>{
//   axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/large_area/v1/?format=json&key=52f717020342571a')
      
//   .then(function(nn){
//     dispach({type:'data',value:nn.data.results.large_area})
//     // console.log(nn.data.results.large_area)
//   })
//   .catch(error => console.log(error))
  
// },[])

// // 沖縄
// const hh=anchorEl.data.map(i=>i.name)
// const hhh=anchorEl.data

// // 東京
// const aa=hh.splice(0,7)
// // 関西
// const bb=hh.splice(0,6)
// // 中部
// const cc=hh.splice(0,4)
// // 北海道
// const dd=hh.splice(0,7)
// // 北陸
// const ee=hh.splice(0,6)
// // 中国
// const ff=hh.splice(0,5)
// // 四国
// const gg=hh.splice(0,4)


// console.log(r[1])
// console.log(a)
// console.log(aa)
// console.log(bb)
// console.log(cc)
// console.log(dd)
// console.log(ee)
// console.log(ff)
// console.log(gg)

const handleClick=useCallback((event)=>{

  switch (event.target.value) {
    case '10':
      dispach({type:'location1',value:event.currentTarget})
      break;
    case '20':
      dispach({type:'location2',value:event.currentTarget})
      break;
    case '30':
      dispach({type:'location3',value:event.currentTarget})
      break;
    case '40':
      dispach({type:'location4',value:event.currentTarget})
      break;
    case '50':
      dispach({type:'location5',value:event.currentTarget})
      break;
    case '60':
      dispach({type:'location6',value:event.currentTarget})
      break;
    case '70':
      dispach({type:'location7',value:event.currentTarget})
      break;
    case '80':
      dispach({type:'location8',value:event.currentTarget})
      break;
  
    default:
      break;
  }

},[])




  // // const handleClick = (event) => {
  //   const handleClickx = useCallback((event) => {
  //     dispach({type:'location1',value:event.currentTarget})
  //   },[]);
  //   // const handleClick2 = (event) => {
  //   const handleClick2 = useCallback((event) => {
  //     //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     // setAnchorEl(event.currentTarget);
  //     dispach({type:'location2',value:event.currentTarget})
      
  //   },[]);
  //   // const handleClick3 = (event) => {
  //   const handleClick3 = useCallback((event) => {
  //     //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     // setAnchorEl(event.currentTarget);
  //     dispach({type:'location3',value:event.currentTarget})
      
  //   },[]);
  //   // const handleClick4 = (event) => {
  //   const handleClick4 = useCallback((event) => {
  //     //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     // setAnchorEl(event.currentTarget);
  //     dispach({type:'location4',value:event.currentTarget})
      
  //   },[]);
  //   // const handleClick5 = (event) => {
  //   const handleClick5 = useCallback((event) => {
  //     //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     // setAnchorEl(event.currentTarget);
  //     dispach({type:'location5',value:event.currentTarget})
      
  //   },[]);
  //   // const handleClick6 = (event) => {
  //   const handleClick6 = useCallback((event) => {
  //     //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     // setAnchorEl(event.currentTarget);
  //     dispach({type:'location6',value:event.currentTarget})
      
  //   },[]);
  //   // const handleClick7 = (event) => {
  //   const handleClick7 = useCallback((event) => {
  //     //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     // setAnchorEl(event.currentTarget);
  //     dispach({type:'location7',value:event.currentTarget})
      
  //   },[]);
  //   // const handleClick8 = (event) => {
  //   const handleClick8 = useCallback((event) => {
  //     //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     // setAnchorEl(event.currentTarget);
  //     dispach({type:'location8',value:event.currentTarget})
      
  //   },[]);

  // const handleClose = () => {
  const handleClose =useCallback( () => {
    // setAnchorEl(null);
    // setAnchorEl2(null);
    dispach({type:'reset'})
  },[]);


  // const jack=(t)=>{
//   const jack=useCallback((t)=>{
//     console.log('じゃじゃ')
//     // console.log(t.target.value)
// switch (t.target.value) {
//   case 10:
// history('/North',{state:{i:t.target.value,p:t.target.id}})
// // console.log(t.target.id)
// // console.log(t.target.value)
//     break;
//   case 20:
// history('/Tokyo',{state:{i:t.target.value,p:t.target.id}})
// break;
//   case 30:
// history('/Hokuriku',{state:{i:t.target.value,p:t.target.id}})
// // history('/Saitama')
//     break;
//   case 40:
// history('/Tyubu',{state:{i:t.target.value,p:t.target.id}})
//     break;
//   case 50:
// history('/Kansai',{state:{i:t.target.value,p:t.target.id}})
//     break;
//   case 60:
// history('/Tyugoku',{state:{i:t.target.value,p:t.target.id}})
//     break;
//   case 70:
// history('/Sikoku',{state:{i:t.target.value,p:t.target.id}})
//     break;
//   case 80:
// history('/Kyushu',{state:{i:t.target.value,p:t.target.id}})
//     break;

//   default:
//     return;

// }
//   },[])

  
  
  return (
    
    <>
<section className={style.back}>
    {/* <div className={style.toppage}>
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
    </div> */}

    <Fotter/>

<Card className={style.btnx}>

    <div>
        {/* <Provider> */}
    <Areaselect state={anchorEl} click={handleClick} close={handleClose}/>
                              {/* </Provider> */}

{/* <Provider>
<Preselect 
// branch={jack}
close={handleClose} state={anchorEl} 
      open={open} open2={open2} open3={open3} open4={open4} open5={open5} open6={open6} open7={open7} open8={open8}
      pre={dd} pre2={aa} pre3={ee} pre4={cc} pre5={bb} pre6={ff} pre7={gg} pre8={hh} pp={hhh}
      />
      </Provider> */}
     
     {/* <Provider>
  <Preselect/>
</Provider> */}
     
      {/* <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick}
        // onMouseLeave={handleClick2}
        >
        北海道・東北
      </Button>

      <Button
        id="basic-button2"
        variant='contained'
        aria-controls={open ? 'basic-menu2' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick2}
        // onMouseLeave={handleClick2}
      >
        関東
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        // aria-controls={open ? 'basic-menu' : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick3}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
      >
        北陸・甲信越
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick4}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
      >
    中部
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick5}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
        >
    関西
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick6}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
        >
    中国
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick7}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
      >
    四国
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick8}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
      >
    九州・沖縄
      </Button> */}


      {/* <Menu
      onMouseLeave={handleClose}
      className={style.ss}
      id="basic-menu"
      // anchorEl={anchorEl.data}
      anchorEl={anchorEl.contents}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      >
          <div className={style.ss} onMouseLeave={handleClose}>
          {dd.map((i,index)=>(
        <MenuItem onClick={jack} id={index} value={10}>{i}</MenuItem>
              ))}
          </div>
      </Menu>

      <Menu
      onMouseLeave={handleClose}
      className={style.ss}
        id="basic-menu2"
        anchorEl={anchorEl.contents2}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
      >
          <div className={style.ss} onMouseLeave={handleClose}>
          {aa.map((i,index)=>(
        <MenuItem onClick={jack} id={index} value={20}>{i}</MenuItem>
        // <p value={i} onClick={me}>{i}</p>
        // <button onClick={me} value={i}>{i}</button>
            
              ))}
      </div>
      </Menu>

      <Menu
      onMouseLeave={handleClose}
      className={style.ss}
        id="basic-menu2"
        anchorEl={anchorEl.contents3}
        open={open3}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
      >
          <div className={style.ss} onMouseLeave={handleClose}>
          {ee.map((i,index)=>(
        <MenuItem onClick={jack} id={index} value={30}>{i}</MenuItem>
              ))}
      </div>
      </Menu>

      <Menu
      onMouseLeave={handleClose}
      className={style.ss}
        id="basic-menu2"
        anchorEl={anchorEl.contents4}
        open={open4}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
      >
          <div className={style.ss} onMouseLeave={handleClose}>
          {cc.map((i,index)=>(
          <MenuItem onClick={jack} id={index} value={40}>{i}</MenuItem>
              ))}
      </div>
      </Menu>

      <Menu
      onMouseLeave={handleClose}
      className={style.ss}
        id="basic-menu2"
        anchorEl={anchorEl.contents5}
        open={open5}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
      >
          <div className={style.ss} onMouseLeave={handleClose}>
          {bb.map((i,index)=>(
               <MenuItem onClick={jack} id={index} value={50}>{i}</MenuItem>
              ))}
      </div>
      </Menu>
      <Menu
      onMouseLeave={handleClose}
      className={style.ss}
        id="basic-menu2"
        anchorEl={anchorEl.contents6}
        open={open6}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
      >
          <div className={style.ss} onMouseLeave={handleClose}>
          {ff.map((i,index)=>(
              <MenuItem onClick={jack} id={index} value={60}>{i}</MenuItem>
              ))}
      </div>
      </Menu>
      <Menu
      onMouseLeave={handleClose}
      className={style.ss}
        id="basic-menu2"
        anchorEl={anchorEl.contents7}
        open={open7}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
      >
          <div className={style.ss} onMouseLeave={handleClose}>
          {gg.map((i,index)=>(
               <MenuItem onClick={jack} id={index} value={70}>{i}</MenuItem>
              ))}
      </div>
      </Menu>
      <Menu
      onMouseLeave={handleClose}
      className={style.ss}
        id="basic-menu2"
        anchorEl={anchorEl.contents8}
        open={open8}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
      >
          <div className={style.ss} onMouseLeave={handleClose}>
          {a.map((i,index)=>(
            <MenuItem onClick={jack} id={index} value={80}>{i}</MenuItem>
              ))}
      </div>
      </Menu> */}

    </div>
            </Card>
</section>
</>
  );
}
