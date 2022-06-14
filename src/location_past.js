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


const ll=(state,action)=>{

    switch(action.type){
        case 'location1':
            return{
                // ...state,
                contents:action.value
            }
        case 'location2':
            return{
                // ...state,
                contents2:action.value
            }

            case 'location3':
                return{
                    contents3:action.value
                }
            case 'location4':
                return{
                    contents4:action.value
                }
                
            case 'location5':
                return{
                    contents5:action.value
                }
                
            case 'location6':
                return{
                    contents6:action.value
                }
                
            case 'location7':
                return{
                    contents7:action.value
                }
                
            case 'location8':
                return{
                    contents8:action.value
                }

            case 'reset':
                return{
                    // ...state,
                    contents:null,
                    
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

    const history=useNavigate()


  const [anchorElqq, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // const open = Boolean(anchorEl.data);
  const open = Boolean(anchorEl.contents);
  const open2 = Boolean(anchorEl.contents2);
  const open3 = Boolean(anchorEl.contents3);
  const open4 = Boolean(anchorEl.contents4);
  const open5 = Boolean(anchorEl.contents5);
  const open6 = Boolean(anchorEl.contents6);
  const open7 = Boolean(anchorEl.contents7);
  const open8 = Boolean(anchorEl.contents8);

//   const open2 = Boolean(anchorEl2);

// useEffect(()=>{
//   axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/large_area/v1/?format=json&key=52f717020342571a')
      
//   .then(function(nn){
//     dispach({type:'data',value:nn.data.results.large_area})
//     // console.log(nn.data.results.large_area)
//   })
//   .catch(error => console.log(error))
  
// },[])

// const ff=anchorEl.data


  const handleClick = (event) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
    // console.log('uuuu')
    // dispach({type:'data',value:event.data})
    dispach({type:'location1',value:event.currentTarget})
    // console.log(ff)
  };
  const handleClick2 = (event) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
    dispach({type:'location2',value:event.currentTarget})
    
  };
  const handleClick3 = (event) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
    dispach({type:'location3',value:event.currentTarget})
    
  };
  const handleClick4 = (event) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
    dispach({type:'location4',value:event.currentTarget})
    
  };
  const handleClick5 = (event) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
    dispach({type:'location5',value:event.currentTarget})
    
  };
  const handleClick6 = (event) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
    dispach({type:'location6',value:event.currentTarget})
    
  };
  const handleClick7 = (event) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
    dispach({type:'location7',value:event.currentTarget})
    
  };
  const handleClick8 = (event) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
    dispach({type:'location8',value:event.currentTarget})
    
  };
  const handleClose = () => {
    // setAnchorEl(null);
    // setAnchorEl2(null);
    dispach({type:'reset'})
  };
  const hh = () => {
    
    console.log(anchorEl.data)
  };

  const tokyo=(()=>{
    console.log('ttttt')
history('/Tokyo')
  })
  const saitama=(()=>{
history('/Saitama')
  })
  
  return (
    
    <>
<p>いいいいいい</p>
<Card className={style.btn}>

    <div>
        
      <Button
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
      </Button>


      <Menu
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
        <MenuItem onClick={handleClose} >北海道</MenuItem>
         <MenuItem onClick={handleClose} >青森</MenuItem>
        <MenuItem onClick={handleClose} >秋田</MenuItem>
        <MenuItem onClick={handleClose} >岩手</MenuItem>
        <MenuItem onClick={handleClose} >宮城</MenuItem>
        <MenuItem onClick={handleClose} >山形</MenuItem>
        <MenuItem onClick={handleClose} >福島</MenuItem>
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
        <MenuItem onClick={tokyo} >東京</MenuItem>
        <MenuItem onClick={saitama}>埼玉</MenuItem>
        <MenuItem onClick={handleClose}>千葉</MenuItem>
        <MenuItem onClick={handleClose}>神奈川</MenuItem>
        <MenuItem onClick={handleClose}>茨城</MenuItem>
        <MenuItem onClick={handleClose}>群馬</MenuItem>
        <MenuItem onClick={handleClose}>栃木</MenuItem>
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
        <MenuItem onClick={handleClose} >新潟</MenuItem>
        <MenuItem onClick={handleClose}>長野</MenuItem>
        <MenuItem onClick={handleClose}>山梨</MenuItem>
        <MenuItem onClick={handleClose}>石川</MenuItem>
        <MenuItem onClick={handleClose}>富山</MenuItem>
        <MenuItem onClick={handleClose}>福井</MenuItem>
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
        <MenuItem onClick={handleClose} >愛知</MenuItem>
        <MenuItem onClick={handleClose}>岐阜</MenuItem>
        <MenuItem onClick={handleClose}>静岡</MenuItem>
        <MenuItem onClick={handleClose}>三重</MenuItem>
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
        <MenuItem onClick={handleClose} >大阪</MenuItem>
        <MenuItem onClick={handleClose}>京都</MenuItem>
        <MenuItem onClick={handleClose}>奈良</MenuItem>
        <MenuItem onClick={handleClose}>兵庫</MenuItem>
        <MenuItem onClick={handleClose}>滋賀</MenuItem>
        <MenuItem onClick={handleClose}>和歌山</MenuItem>
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
        <MenuItem onClick={handleClose} >岡山</MenuItem>
        <MenuItem onClick={handleClose}>広島</MenuItem>
        <MenuItem onClick={handleClose}>鳥取</MenuItem>
        <MenuItem onClick={handleClose}>島根</MenuItem>
        <MenuItem onClick={handleClose}>山口</MenuItem>
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
        <MenuItem onClick={handleClose} >香川</MenuItem>
        <MenuItem onClick={handleClose}>徳島</MenuItem>
        <MenuItem onClick={handleClose}>愛媛</MenuItem>
        <MenuItem onClick={handleClose}>高知</MenuItem>
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
        <MenuItem onClick={handleClose} >福岡</MenuItem>
        <MenuItem onClick={handleClose}>佐賀</MenuItem>
        <MenuItem onClick={handleClose}>長崎</MenuItem>
        <MenuItem onClick={handleClose}>熊本</MenuItem>
        <MenuItem onClick={handleClose}>大分</MenuItem>
        <MenuItem onClick={handleClose}>宮崎</MenuItem>
        <MenuItem onClick={handleClose}>鹿児島</MenuItem>
        <MenuItem onClick={handleClose}>沖縄</MenuItem>
      </div>
      </Menu>

    </div>
            </Card>
</>
  );
}
