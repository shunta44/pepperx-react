// 関東・北海道など地方エリアごとにURL(ファイル)が変わるパターン
import * as React from "react";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import style from "../style.module.css";

import { useLocation } from "react-router";
import { useRef } from "react";
import { useCallback } from 'react';

import Areaselect from "../component/areaselect";
import Conditionbutton from "../component/conditionbutton";
import Shoplist from "../component/shoplist";
import Pagenation from "../component/pagenation";
import Conditionstatus from "../component/conditionstatus";


function Tokyo() {

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

  const mes =
    "指定した条件にマッチするお店がありません。\n条件を変えてください";

  const uuu = useLocation();

  const two = uuu.state.p;


  let areacodefirst = "";
  const areacode = useRef(areacodefirst);

  useEffect(() => {
    switch (two) {
  
      case '0':
        areacodefirst='Z011';
        areacode.current=areacodefirst

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
      .then(function (nn) {
        settokyo(nn.data.results.middle_area);

      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {

    axios
      .get(
        `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&large_area=${areacodefirst}&special_category=SPG5&count=50`
      )
      .then(function (nn) {

        settokyo2(nn.data.results.shop);
  
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/budget/v1/?format=json&key=52f717020342571a"
      )
      .then(function (nn) {

        setmoney(nn.data.results.budget);
      })
      .catch((error) => console.log(error));
  }, []);

  const areacodedone = areacode.current;

  const bb = tokyo.filter((item) => item.large_area.code === areacodedone);

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
    const code = t.target.id;
    const code2 = t.target.value;
    setfirsttext("");

    axios
      .get(
        `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${code}&count=50`
      )
      .then(function (nn) {
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

  },[tokyo2])


  const moneychange =useCallback( (e) => {
    console.log(1000);

    if (firsttext!=='') {
        alert('最初にエリアを選択してください')
        return;
      }
      if (gg == null) {
        gg   = areacode.current;
      }
  
      if (error !== "") {
        seterror("");
      }
  
    let gg = tokyo2.map((i) => i.middle_area.code).shift();
    const x = money.map((i) => i.code);
    let url = "";
    setpage(0);
    setpagenumber(1);

    switch (e.target.value) {
      case "10":
        const amount = x.slice(0, 2);
        console.log(amount);
        setval(10);
        setjoker2(`budget=${amount}`);

        if (joker !== "") {
          url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount}&count=50&${joker}`;
        } else {
        url = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount}&count=50`;
        }

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
      .then(function (kk) {
        settokyo2(kk.data.results.shop);
        const data = kk.data.results.shop;
        if (data.length === 0) {
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
      if (search === "") {
        alert("文字を入力してください");
        return;
      }
      axios
        .get(
          `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name_any=${ww}&middle_area=${gg}&count=50`
        )
        .then(function (kk) {
          settokyo2(kk.data.results.shop);
          const data = kk.data.results.shop;
          if (data.length === 0) {
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

    </>
  );
}

export default Tokyo;
