import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import axios from 'axios';
import { memo } from "react";


// コンポーネントじゃないからmemo化意味ない
 const Providerx =(props) => {
  console.log('cuscus')

  // const { ch }=props
  const[data2,setdata2]=useState([])

  useEffect(()=>{
    axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/large_area/v1/?format=json&key=52f717020342571a')
        
    .then(function(nn){
  setdata2(nn.data.results.large_area)
    })
    .catch(error => console.log(error))
    
  },[])

  const history=useNavigate()

  // const jack5=(t)=>{
  const jack5=useCallback((t)=>{
    console.log('ゴゴゴゴゴ文庫')
    // console.log(t.target.value)
switch (t.target.value) {
  case 10:
history('/North',{state:{i:t.target.value,p:t.target.id}})
// console.log(t.target.id)
// console.log(t.target.value)
    break;
  case 20:
history('/Tokyo',{state:{i:t.target.value,p:t.target.id}})
break;
  case 30:
history('/Hokuriku',{state:{i:t.target.value,p:t.target.id}})
    break;
  case 40:
history('/Tyubu',{state:{i:t.target.value,p:t.target.id}})
    break;
  case 50:
history('/Kansai',{state:{i:t.target.value,p:t.target.id}})
    break;
  case 60:
history('/Tyugoku',{state:{i:t.target.value,p:t.target.id}})
    break;
  case 70:
history('/Sikoku',{state:{i:t.target.value,p:t.target.id}})
    break;
  case 80:
history('/Kyushu',{state:{i:t.target.value,p:t.target.id}})
    break;

  default:

    return;

}
  },[])

  // 値は変わらないためuseMemo意味ない
  // const rock=useMemo(()=>{
  // return {jack5,data2}

  // },[])
  const rock= {jack5,data2}

  

  // return {jack5,data2}
  return rock
};

export default Providerx;