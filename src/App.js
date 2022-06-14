import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import style from './style.module.css'
import { makeStyles } from '@mui/material';
import { useRef } from 'react';

// 別ファイルのCSSを読み込む場合
// importした時点でbodyやliなど既存のタグへのスタイルは反映される

// CSS in Jsにする場合
// makeStylesは非水準
// react18では使えない→エラーになる
// material-uiの推奨はemotion派生のstyled記述

// const st =makeStyles(()=>({
//   kk:{
//       listStyle:'none'
//   }
// }))

const Ppp=styled('li')({
listStyle:'none'
})


function App() {

  const[shopp,setshop]=useState([])
  const[search,setsearch]=useState('')
  // const ser=useRef(null)

  const KEY='52f717020342571a';

  const word=(e)=>{
setsearch(e.target.value);
console.log(88)
}

const word2=(e)=>{

  // e.preventDefault()
    
    if (search==='') {
      alert('文字を入力してください');
      return;
    }
    const ww=search;
    axios.get(`https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&keyword=${ww}`)
    // axios.get(`https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name_any=${ww}`)
    .then(function(kk){
      setshop(kk.data.results.shop)
    })
    .catch(error=>console.log(error))
    
    setsearch('')
    console.log(ww)  
  
  }

  const word3=(e)=>{
    if (e.key==='Enter') {

      // alert('uuuuu');
      if (search==='') {
        alert('文字を入力してください');
        return;
      }
      const ww=search;
      axios.get(`https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name_any=${ww}`)
      .then(function(kk){
        setshop(kk.data.results.shop)
      })
      .catch(error=>console.log(error))
      
      setsearch('')
      console.log(ww) 
    }
  }

// const hot=useCallback(()=>{
// },[])

const url=axios.create({
  baseURL:'https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1'
})

const axx=async()=>{
  return(
    await url.get('',{
      params: {
        key:KEY,
        large_area:'Z011',
        format: 'json',
     }
    })
  )
  // url.get('key=52f717020342571a&large_area=Z011')
}
// const axx=()=>{
//   url.get('key=52f717020342571a&large_area=Z011')
// }

// const fish=()=>{
//   console.log(qq)
// }

useEffect(()=>{


  // axios.get('https://api-cors4544545454.herokuapp.com/https://webservice.recruit.co.jp/hotpepper/special/v1/?format=json&key=52f717020342571a&special_category')
  // axios.get('https://api-cors4544545454.herokuapp.com/https://webservice.recruit.co.jp/hotpepper/special/v1/?format=json&key=sample&special_category=SPG6')
  // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&special&count=5')
  axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&large_area=Z011&count=5')
  // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&large_area=Z011&karaoke=1&count=5')
  // axios.get('http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=52f717020342571a&large_area=Z011')
  // axx()
  .then(function(nn){
    // console.log('qqqqq')
    // console.log(nn.data.results)
    // console.log(nn.data.results)
    // console.log(nn.data.shop)
    // console.log(nn.data.shop)
    // setshop(nn.data.shop)
  // setshop(nn.data)
  // setshop(nn.data.results.special)
  setshop(nn.data.results.shop)
    // console.log(shop)
  })
  
  .catch(error => console.log(error))
},[])



return (
<>
<div>

{/* <input type="text"  rr={ser} placeholder='店名を入力' onKeyDown={word3} /> */}
<input type="text" value={search} onChange={word} placeholder='店名を入力' onKeyDown={word3} />
<button onClick={word2}>検索</button>
</div>
{/* {shopp.map(item=>(
  <ul>
    <li>
    <p>{item.name}</p>
    <p>{item.code}</p>

    </li>
  </ul>
))} */}

<ul>
{shopp.map(item=>(
    
// {/* <Ppp>  */}

<li > 

      {/* <img src={item.logo_image} alt="" /> */}
<img src={item.photo.pc.l} alt="" />
<p>{item.name}</p>
<a href={item.urls.pc} target='branch'>クリック</a>
<p>住所→{item.address}</p>
<p>最寄り駅→{item.station_name}</p>
<p>アクセス→{item.access}</p>
<p>飲み放題→{item.free_drink}</p>
<p>23時以降の営業→{item.midnight}</p>
<p>予算→{item.budget.average}</p>
<p>営業時間→{item.open}</p>
<p>駐車場→{item.parking}</p>
<p>個室→{item.private_room}</p>
  </li> 

// </Ppp>

    
))}
</ul>


{/* <img src="" alt="" /> */}

{/* Powered by <a href="http://webservice.recruit.co.jp/">ホットペッパー Webサービス</a> */}
<br />

{/* <a href="http://webservice.recruit.co.jp/"><img src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif" alt="ホットペッパー Webサービス" width="135" height="17" border="0" title="ホットペッパー Webサービス"/></a> */}

</>
);

}

export default App;
