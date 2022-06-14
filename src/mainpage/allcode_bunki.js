// 関東・北海道など地方エリアごとにURL(ファイル)が変わるパターン
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  styled,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import style from "../style.module.css";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import { Pagination } from "@mui/material";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import MediaQuery from "react-responsive";
import { useMemo } from "react";
import { useLocation } from "react-router";
import { useRef } from "react";
import { useCallback } from 'react';

import Areaselect from "../component/areaselect";
import Conditionbutton from "../component/conditionbutton";
import Shoplist from "../component/shoplist";
import Pagenation from "../component/pagenation";
import Conditionstatus from "../component/conditionstatus";

import moneychangex from "./moneychange"
import { useContext } from "react";
import { Context } from "./globalstate";
import Providerx from "./customfook";

// 検索結果がエラーだった時に使う変数→エリアコードを保持する
// 外で定義すれば問題なく使える
// let jack='aaa'
// console.log(jack)
// useRefの使用で解決

function Tokyo() {
  // export default function Tokyo() {

  const [tokyo, settokyo] = useState([]);
  const [tokyo2, settokyo2] = useState([]);
  const [money, setmoney] = useState([]);
  const [expanded, setexpanded] = useState(false);
  const [val, setval] = useState(0);
  const [pages, setpage] = useState(0);
  const [search, setsearch] = useState("");
  const [pagenumber, setpagenumber] = useState(1);
  const per = 10;

  const [joker, setjoker] = useState("");
  const [joker2, setjoker2] = useState("");

  const [condition, setcondition] = useState("");
  const [areacondition, setarescondition] = useState("");
  const [firsttext, setfirsttext] = useState(
    "特別なシーンにおすすめなお店をピックアップ！\n上記タブからエリアを絞れます"
  );
  const [error, seterror] = useState("");
  // const [areacode,setareacode]=useState('')
  const mes =
    "指定した条件にマッチするお店がありません。\n条件を変えてください";

  const uuu = useLocation();
  // console.log(uuu)
  // console.log(uuu.state.i)
  // console.log(uuu.state.p)

  const two = uuu.state.p;

  // 検索結果がエラーだった時に使う変数→エリアコードを保持する
  // 中で定義すると値がリセットされるためuseRefを使用
  // let jack='aaa'

  let areacodefirst = "";
  const areacode = useRef(areacodefirst);

  // const [areacode,setareacode]=useState('')

  // 取得した２つの値を配列にしてjoinで文字列に結合
  // console.log([one,two].join(','))
  // switch ([one,two].join(',')) {
  useEffect(() => {
    // console.log("first1");
    switch (two) {
  
      case '0':
        areacodefirst='Z011';
        areacode.current=areacodefirst
        // console.log(areacodefirst)
        // setareacode('Z041')
  break;
  case '1':
   areacodefirst='Z012';
   areacode.current=areacodefirst
    break;
  case '2':
   areacodefirst='Z013';
   areacode.current=areacodefirst
    break;
  case '3':
   areacodefirst='Z014';
   areacode.current=areacodefirst
    break;
  case '4':
   areacodefirst='Z015';
   areacode.current=areacodefirst
    break;
  case '5':
   areacodefirst='Z016';
   areacode.current=areacodefirst
    break;
  case '6':
   areacodefirst='Z017';
   areacode.current=areacodefirst
    break;
  
  
  
    default:
      break;
    }
   


  }, []);

  useEffect(() => {
    // console.log("first2");
    axios
      .get(
        "https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/middle_area/v1/?format=json&key=52f717020342571a"
      )
      //   axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&large_area=Z011&middle_area=Y005')

      .then(function (nn) {
        // dispach({type:'data',value:nn.data.results.large_area})
        settokyo(nn.data.results.middle_area);
        // console.log(nn.data.results.middle_area)
        // settokyo(nn.data.results.shop)
        // console.log(nn.data.results)
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // console.log(areacodefirst)
    // console.log("first3");
    axios
      .get(
        `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&large_area=${areacodefirst}&special_category=SPG5&count=50`
      )
      // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&large_area=Z011&special_category=SPG5&count=50')

      .then(function (nn) {
        // dispach({type:'data',value:nn.data.results.large_area})
        // console.log(nn.data.results.large_area)
        settokyo2(nn.data.results.shop);
        // console.log(nn.data.results.shop)
        // console.log(tokyo2)
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // console.log("first4");
    axios
      .get(
        "https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/budget/v1/?format=json&key=52f717020342571a"
      )

      .then(function (nn) {
        // dispach({type:'data',value:nn.data.results.large_area})
        // console.log(nn.data.results.large_area)
        setmoney(nn.data.results.budget);
        // console.log(nn.data.results.budget)
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(areacode)
  // console.log(areacode.current)
  const areacodedone = areacode.current;

  const bb = tokyo.filter((item) => item.large_area.code === areacodedone);
  // const bb=  tokyo.filter((item)=>item.large_area.code===`${areacode}`)
  // const bb=  tokyo.filter((item)=>item.large_area.code==='Z012')
  // console.log(bb)

  const dd =useCallback( (data, index, a) => {
    setpage((index - 1) * per);
    setpagenumber(index);
    console.log(1);
  },[]);

  const area =useCallback( (event, expanded) => {
    setexpanded(expanded);
    console.log(2);
  },[]);

  const areachange =useCallback( (t) => {
    // console.log(t.target.id)
    const code = t.target.id;
    const code2 = t.target.value;
    setfirsttext("");
    // console.log(code2);

    axios
      .get(
        `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${code}&count=50`
      )

      .then(function (nn) {
        // dispach({type:'data',value:nn.data.results.large_area})
        settokyo2(nn.data.results.shop);
      })
      .catch((error) => console.log(error));

    setexpanded(false);
    setval(0);
    setcondition("");
    setjoker("");
    setjoker2("");
    setarescondition(code2);
    setpage(0);
    setpagenumber(1);
    seterror("");
  // },[]);
  },[]);

  const click=useCallback((e)=>{
    if (firsttext!=='') {
      alert('最初にエリアを選択してください')
      return;
    }

    let url = "";
    let gg = tokyo2.map((i) => i.middle_area.code).shift();

    if (gg == null) {
      gg = areacode.current;
    }

    if (error !== "") {
      seterror("");
    }
    setpage(0);
    setpagenumber(1);
    
    switch (e.target.value) {
      case '10':
        setjoker("private_room=1");
        setcondition("個室あり");
        if (joker2 !== "") {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&private_room=1&count=50&${joker2}`;
        } else{
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&private_room=1&count=50`;
    }
        break;
      case '20':
    setjoker("free_food=1");
    setcondition("食べ放題あり");
    console.log(joker)
    if (joker2 !== "") {
      url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&free_food=1&count=50&${joker2}`;
    } else{
      url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&free_food=1&count=50`;
    }
        break;
      case '30':
    setjoker("free_drink=1");
    setcondition("飲み放題あり");
    if (joker2 !== "") {
      url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&free_drink=1&count=50&${joker2}`;
    } else{
      url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&free_drink=1&count=50`;
    }
        break;
      case '40':
    setjoker("parking=1");
    setcondition("駐車場あり");
    if (joker2 !== "") {
      url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&parking=1&count=50&${joker2}`;
    } else{
      url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&parking=1&count=50`;
    }
        break;
      case '50':
    setjoker("lunch=1");
    setcondition("ランチあり");
    if (joker2 !== "") {
      url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&lunch=1&count=50&${joker2}`;
    } else{
      url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&lunch=1&count=50`;
    }
        break;
      case '60':
    setval(0);
    setcondition("");
    setjoker("");
    setjoker2("");
    url=`https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&count=50`
        break;
    
      default:
        break;

      }

      // なぜかここで空判定になる
      // if (joker!=='') {
      //   console.log(111)
      // }else{
      //   console.log(333)

      // }

      // 1個前にクリックしたstateが入ってくる??
      // console.log(joker)
      // console.log(url2)
      // console.log(url3)
      // console.log(url)

    axios
    .get(url)

    .then(function (nn) {
      settokyo2(nn.data.results.shop);
      const data = nn.data.results.shop;
      if (data.length === 0) {
        // if (Array.length===0の省略)
        seterror(mes);
        areacode.current = gg;
      }
    })
    .catch((error) => console.log(error));

  },[tokyo2])

  // const click = () => {

//   const clickx =useCallback( () => {
// console.log(firsttext)
// console.log(4);
//     if (firsttext!=='') {
//       alert('最初にエリアを選択してください')
//       return;
//     }
//     let gg = tokyo2.map((i) => i.middle_area.code).shift();

//     let url = "";
//     if (gg == null) {
//       gg = areacode.current;
//       // gg=jack
//     }

//     setjoker("private_room=1");
//     // console.log(joker)
//     setpage(0);
//     setcondition("個室あり");
//     if (error !== "") {
//       seterror("");
//     }

//     if (joker2 !== "") {
//       console.log(1111);
//       url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&private_room=1&count=50&${joker2}`;
//     } else {
//       console.log(666);
//       url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&private_room=1&count=50`;
//     }

//     axios
//       .get(url)

//       .then(function (nn) {
//         settokyo2(nn.data.results.shop);
//         const data = nn.data.results.shop;
//         if (data.length === 0) {
//           // if (Array.length===0の省略)
//           seterror(mes);
//           areacode.current = gg;
//         }
//       })
//       .catch((error) => console.log(error));
//   },[tokyo2]);

//   const click2 =useCallback( () => {
//     console.log(5);
//     if (firsttext!=='') {
//       alert('最初にエリアを選択してください')
//       return;
//     }
//     let gg = tokyo2.map((i) => i.middle_area.code).shift();

//     let url = "";
//     if (gg == null) {
//       gg = areacode.current;
//     }

//     setjoker("free_food=1");
//     console.log(joker)
//     setpage(0);
//     setcondition("食べ放題あり");
//     if (error !== "") {
//       seterror("");
//     }

//     if (joker2 !== "") {
//       url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&free_food=1&count=50&${joker2}`;
//     } else {
//       url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&free_food=1&count=50`;
//     }

//     axios
//       .get(url)

//       .then(function (nn) {
//         // dispach({type:'data',value:nn.data.results.large_area})
//         settokyo2(nn.data.results.shop);
//         const data = nn.data.results.shop;
//         if (data.length === 0) {
//           // if (Array.length===0の省略)
//           seterror(mes);
//           areacode.current = gg;
//         }
//       })
//       .catch((error) => console.log(error));
//   },[tokyo2]);

  
//   const click3 =useCallback( () => {
//     console.log(6);
//     if (firsttext!=='') {
//       alert('最初にエリアを選択してください')
//       return;
//     }
//     let gg = tokyo2.map((i) => i.middle_area.code).shift();
//     let url = "";
//     if (gg == null) {
//       gg = areacode.current;
//     }

//     setjoker("free_drink=1");
//     setpage(0);
//     setcondition("飲み放題あり");
//     if (error !== "") {
//       seterror("");
//     }

//     if (joker2 !== "") {
//       url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&free_drink=1&count=50&${joker2}`;
//     } else {
//       url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&free_drink=1&count=50`;
//     }

//     axios
//       .get(url)

//       .then(function (nn) {
//         // dispach({type:'data',value:nn.data.results.large_area})
//         settokyo2(nn.data.results.shop);
//         const data = nn.data.results.shop;
//         if (data.length === 0) {
//           // if (Array.length===0の省略)
//           seterror(mes);
//           areacode.current = gg;
//         }
//       })
//       .catch((error) => console.log(error));
//   },[tokyo2]);

  
//   const click4 =useCallback( () => {
//     console.log(7);
//     if (firsttext!=='') {
//       alert('最初にエリアを選択してください')
//       return;
//     }
//     let gg = tokyo2.map((i) => i.middle_area.code).shift();
//     let url = "";
//     if (gg == null) {
//       gg = areacode.current;
//     }

//     setjoker("parking=1");
//     setpage(0);
//     setcondition("駐車場あり");
//     if (error !== "") {
//       seterror("");
//     }

//     if (joker2 !== "") {
//       url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&parking=1&count=50&${joker2}`;
//     } else {
//       url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&parking=1&count=50`;
//     }

//     axios
//       .get(url)

//       .then(function (nn) {
//         // dispach({type:'data',value:nn.data.results.large_area})
//         settokyo2(nn.data.results.shop);
//         const data = nn.data.results.shop;
//         // console.log(data)
//         if (data.length === 0) {
//           // if (Array.length===0の省略)
//           seterror(mes);
//           areacode.current = gg;
//         }
//       })
//       .catch((error) => console.log(error));
//   },[tokyo2]);

  
//   const click5 =useCallback( () => {
//     console.log(8);
//     if (firsttext!=='') {
//       alert('最初にエリアを選択してください')
//       return;
//     }
//     let gg = tokyo2.map((i) => i.middle_area.code).shift();
//     let url = "";
//     if (gg == null) {
//       gg = areacode.current;
//     }

//     setjoker("lunch=1");
//     setpage(0);
//     setcondition("ランチあり");
//     if (error !== "") {
//       seterror("");
//     }

//     if (joker2 !== "") {
//       url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&lunch=1&count=50&${joker2}`;
//     } else {
//       url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&lunch=1&count=50`;
//     }

//     axios
//       .get(url)

//       .then(function (nn) {
//         // dispach({type:'data',value:nn.data.results.large_area})
//         settokyo2(nn.data.results.shop);
//         const data = nn.data.results.shop;
//         // console.log(data)
//         if (data.length === 0) {
//           // if (Array.length===0の省略)
//           seterror(mes);
//           areacode.current = gg;
//         }
//         console.log(areacode.current);
//       })
//       .catch((error) => console.log(error));
//   },[tokyo2]);

//   const reset =useCallback( () => {
//     console.log(9);
//     if (firsttext!=='') {
//       alert('条件が設定されていません')
//       return;
//     }
//     let gg = tokyo2.map((i) => i.middle_area.code).shift();
//     // const gg=g.pop()

//     if (gg == null) {
//       gg = areacode.current;
//     }

//     setval(0);
//     setcondition("");
//     setjoker("");
//     setjoker2("");
//     setpage(0);
//     if (error !== "") {
//       seterror("");
//     }

//     axios
//       .get(
//         `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&count=50`
//       )

//       .then(function (nn) {
//         settokyo2(nn.data.results.shop);
//       })
//       .catch((error) => console.log(error));
//   },[tokyo2]);


  const moneychange =useCallback( (e) => {
    console.log(1000);
  
  if (firsttext!=='') {
      alert('最初にエリアを選択してください')
      return;
    }
    let gg = tokyo2.map((i) => i.middle_area.code).shift();
    // const gg=g.pop()
    // console.log(gg)
    if (gg == null) {
      // console.log(jack)
      gg   = areacode.current;
    }

    const x = money.map((i) => i.code);

    console.log(x);

    let url = "";
    setpage(0);
    setpagenumber(1);

    if (error !== "") {
      seterror("");
    }

    switch (e.target.value) {
      case "10":
        const amount = x.slice(0, 2);
        console.log(amount);
        // let url1=''
        setval(10);
        setjoker2(`budget=${amount}`);

        if (joker !== "") {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount}&count=50&${joker}`;
        } else {
        url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount}&count=50`;
        }

        // axios
        //   .get(url1)

        //   .then(function (nn) {
        //     settokyo2(nn.data.results.shop);
        //   })
        //   .catch((error) => console.log(error));

        break;

      case "20":
        const amount2 = x.slice(2, 4);
        console.log(amount2);
        setval(20);
        setjoker2(`budget=${amount2}`);

        if (joker !== "") {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount2}&count=50&${joker}`;
        } else {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount2}&count=50`;
        }

        break;

      case "30":
        const amount3 = x.slice(4, 5);
        console.log(amount3);
        setval(30);
        setjoker2(`budget=${amount3}`);

        if (joker !== "") {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount3}&count=50&${joker}`;
        } else {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount3}&count=50`;
        }

        break;

      case "40":
        const amount4 = x.slice(5, 7);
        console.log(amount4);
        setval(40);
        setjoker2(`budget=${amount4}`);

        if (joker !== "") {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount4}&count=50&${joker}`;
        } else {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount4}&count=50`;
        }

        break;

      case "50":
        const amount5 = x.slice(7, 9);
        console.log(amount5);
        setval(50);
        setjoker2(`budget=${amount5}`);

        if (joker !== "") {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount5}&count=50&${joker}`;
        } else {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount5}&count=50`;
        }

        break;

      case "60":
        const amount6 = x.slice(9, 11);
        console.log(amount6);
        setval(60);
        setjoker2(`budget=${amount6}`);

        if (joker !== "") {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount6}&count=50&${joker}`;
        } else {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount6}&count=50`;
        }
        break;

      case "70":
        const amount7 = x.slice(11, 12);
        console.log(amount7);

        setval(70);
        setjoker2(`budget=${amount7}`);

        if (joker !== "") {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount7}&count=50&${joker}`;
        } else {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount7}&count=50`;
        }

        break;

      default:
        break;
    }

    axios
    .get(url)
    .then(function (nn) {
      settokyo2(nn.data.results.shop);
                  const data = nn.data.results.shop;
            if (data.length === 0) {
              seterror(mes);
              areacode.current = gg;
            }
    })
    .catch((error) => console.log(error));

  },[tokyo2]);

  const word = (e) => {
    if (firsttext!=='') {
      alert('最初にエリアを選択してください')
      return;
    }
    setsearch(e.target.value);
    console.log(12);
  };


  const word2 = (e) => {
    console.log(13);
    let gg = tokyo2.map((i) => i.middle_area.code).shift();
    const ww = search;

    

    if (search === "") {
      alert("文字を入力してください");
      return;
    }
    axios
      .get(
        `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name_any=${ww}&middle_area=${gg}&count=50`
      )
      // axios.get(`https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name_any=${ww}`)
      .then(function (kk) {
        settokyo2(kk.data.results.shop);
        const data = kk.data.results.shop;
        if (data.length === 0) {
          // if (Array.length===0の省略)
          seterror(mes);
          areacode.current = gg;
        }
      })
      .catch((error) => console.log(error));

    setsearch("");
    setcondition("");
    setval(0);
    setpage(0);
    setpagenumber(1);
  };

  const word3 = (e) => {
    console.log(14);
    let gg = tokyo2.map((i) => i.middle_area.code).shift();
    const ww = search;

    if (e.key === "Enter") {
      // alert('uuuuu');
      if (search === "") {
        alert("文字を入力してください");
        return;
      }
      axios
        .get(
          // `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name_any=${ww}&large_area=${areacode.current}&count=50`
          `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name_any=${ww}&middle_area=${gg}&count=50`
        )
        .then(function (kk) {
          settokyo2(kk.data.results.shop);
          const data = kk.data.results.shop;
          if (data.length === 0) {
            // if (Array.length===0の省略)
            seterror(mes);
            areacode.current = gg;
          }
        })
        .catch((error) => console.log(error));

      setsearch("");
      setcondition("");
      setval(0);
      setpage(0);
      setpagenumber(1);
    }
  };


  return (
    <>

      <Areaselect
        areacode={bb}
        change={areachange}
        change2={area}
        expanded={expanded}
      />
      <Conditionbutton
        click={click}
        // condition1={click}
        // condition2={click2}
        // condition3={click3}
        // condition4={click4}
        // condition5={click5}
        // conditionreset={reset}
        val={val}
        change={moneychange}
      />

      <div className={style.in}>
        <input
          type="text"
          value={search}
          onChange={word}
          placeholder="店名で検索"
          onKeyDown={word3}
        />
        <button onClick={word2}>検索</button>
      </div>

      <p className={style.first}>{firsttext}</p>
      <Conditionstatus m={areacondition} mm={condition}/>
      <p className={style.error}>{error}</p>

      <Shoplist list={tokyo2} page={pages} shopamount={per} />

      <Pagenation
        count={tokyo2}
        amount={per}
        change={dd}
        numbercolor={pagenumber}
      />

      {/* <Grid container>
<Grid item xs={12} >
<Accordion expanded={expanded} onChange={area}> */}
      {/* <Accordion expanded='true'> */}
      {/* <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography variant='h6'> <strong>エリアを選択</strong></Typography>
        </AccordionSummary>
        <AccordionDetails> */}
      {/* <Typography> */}
      {/* <Card> */}

      {/* <Grid container>

{bb.map((item,i)=>(
  
  <div className={style.btn2} key={i}>
    <Button variant="contained" color='secondary' size="small" key={i} className={style.btn3} onClick={areachange} id={item.code} value={item.name}>{item.name}</Button>
  </div>

))}
  </Grid> */}

      {/* </Card> */}
      {/* </Typography> */}

      {/* </AccordionDetails>
      </Accordion>


  </Grid>
  </Grid> */}

      {/* <div className={style.contents}> */}
      {/* <Grid container> */}

      {/* <Grid container>

<Grid item xs={12} sm={9} md={10} >
<div className={style.btn}>
<MediaQuery query='(max-width:600px)'>
<Button variant='contained' size='small' onClick={click}>個室ありで絞る</Button>
<Button variant='contained' size='small' onClick={click2}>食べ放題ありで絞る</Button>
<Button variant='contained' size='small' onClick={click3}>飲み放題ありで絞る</Button>
<Button variant='contained' size='small' onClick={click4}>駐車場ありで絞る</Button>
<Button variant='contained' size='small' onClick={click5}>ランチありで絞る</Button>
<Button variant='contained' color='error' size='small' onClick={reset}>条件をリセットする</Button>
</MediaQuery>
<MediaQuery query='(min-width:601px)'>
<Button variant='contained'  onClick={click}>個室ありで絞る</Button>
<Button variant='contained' onClick={click2}>食べ放題ありで絞る</Button>
<Button variant='contained' onClick={click3}>飲み放題ありで絞る</Button>
<Button variant='contained' onClick={click4}>駐車場ありで絞る</Button>
<Button variant='contained' onClick={click5}>ランチありで絞る</Button>
<Button variant='contained' color='error' onClick={reset}>条件をリセットする</Button>
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
          // defaultValue={0}
          value={val}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={moneychange}
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

    </Grid> */}

      {/* <Grid item xs={7} sm={12} >
<div className={style.btnn}>
<MediaQuery query='(max-width:600px)'>
<Button variant='contained' color='error' size='small' onClick={reset}>条件をリセットする</Button>
</MediaQuery>
<MediaQuery query='(min-width:601px)'>
<Button variant='contained' color='error' onClick={reset}>条件をリセットする</Button>
</MediaQuery>

</div>
</Grid> */}

      {/* </Grid> */}

      {/* CSS使わないで改行
      <div>
        {error.split('\n').map(i=>(<p>{i}</p>))}
      </div> */}

      {/* 関数を呼び出してメッセージ表示させる事もできる
      <p>{rrr()}</p> */}

      {/* <ul>

<Grid container> */}

      {/* {tokyo2.slice(pages,pages+per).map((item,i)=>( */}

      {/* // <Ppp>
  
//   <Grid item xs={12} sm={6} key={i} >
// <li key={i}>  */}

      {/* <img src={item.logo_image} alt="" /> */}
      {/* <Card> */}
      {/* <div className={style.main}>

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
</div> */}

      {/* </div> */}

      {/* <div className={style.item}>
<p> <strong>住所→</strong> {item.address}</p> */}
      {/* <p>最寄り駅→{item.station_name}</p> */}
      {/* <p><strong>アクセス→</strong>{item.access}</p>
<p><strong>飲み放題→</strong>{item.free_drink}</p>
<p><strong>食べ放題→</strong>{item.free_food}</p>
<p><strong>23時以降の営業→</strong>{item.midnight}</p>
<p><strong>予算→</strong>{item.budget.average}</p>
<p><strong>営業時間→</strong>{item.open}</p>
<p><strong>駐車場→</strong>{item.parking}</p>
<p><strong>個室→</strong>{item.private_room}</p>
    </div> */}
      {/* </Card> */}

      {/* </li> 
  </Grid>

// </Ppp>

    
))}
</Grid>
</ul> */}

      {/* <Pagination
       count={Math.ceil(tokyo2.length/per)}
       color='primary'
       onChange={dd}
       className={style.page2}
       page={pagenumber}
       /> */}
    </>
  );
}

export default Tokyo;
