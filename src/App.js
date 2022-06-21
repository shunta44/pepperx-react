import * as React from "react";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import style from "./style.module.css";

import { useLocation } from "react-router";
import { useRef } from "react";
import { useCallback } from 'react';

import Areaselect from "./component/areaselect";
import Conditionbutton from "./component/conditionbutton";
import Shoplist from "./component/shoplist";
import Pagenation from "./component/pagenation";
import Conditionstatus from "./component/conditionstatus";
import Loading from "./loading";
import { memo } from "react";
import { animateScroll } from "react-scroll";
import { Link } from "react-router-dom";

const App=memo(()=> {

  const [tokyo, settokyo] = useState([]);
  const [tokyo2, settokyo2] = useState([]);
  const [money, setmoney] = useState([]);
  const [expanded, setexpanded] = useState(false);
  const [loading, setloading] = useState(false);
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
  
  const one = uuu.state.i;
  const two = uuu.state.p;
  
  const mix = one + two;
  
  
  let areacodefirst = "";
  const areacode = useRef(areacodefirst);
  let detailareacode = '';
  const areacode2 = useRef(detailareacode);
  
  useEffect(() => {
      switch (mix) {
        case "100":
          areacodefirst = "Z041"
          areacode.current = areacodefirst;
          break;
        case "101":
          areacodefirst = "Z051";
          areacode.current = areacodefirst;
          break;
        case "102":
          areacodefirst = "Z052";
          areacode.current = areacodefirst;
          break;
        case "103":
          areacodefirst = "Z053";
          areacode.current = areacodefirst;
          break;
        case "104":
          areacodefirst = "Z054";
          areacode.current = areacodefirst;
          break;
        case "105":
          areacodefirst = "Z055";
          areacode.current = areacodefirst;
          break;
        case "106":
          areacodefirst = "Z056";
          areacode.current = areacodefirst;
          break;
  
        case "200":
          areacodefirst = "Z011";
          areacode.current = areacodefirst;
          break;
        case "201":
          areacodefirst = "Z012";
          areacode.current = areacodefirst;
          break;
        case "202":
          areacodefirst = "Z013";
          areacode.current = areacodefirst;
          break;
        case "203":
          areacodefirst = "Z014";
          areacode.current = areacodefirst;
          break;
        case "204":
          areacodefirst = "Z015";
          areacode.current = areacodefirst;
          break;
        case "205":
          areacodefirst = "Z016";
          areacode.current = areacodefirst;
          break;
        case "206":
          areacodefirst = "Z017";
          areacode.current = areacodefirst;
          break;
  
        case "300":
          areacodefirst = "Z061";
          areacode.current = areacodefirst;
          break;
        case "301":
          areacodefirst = "Z062";
          areacode.current = areacodefirst;
          break;
        case "302":
          areacodefirst = "Z063";
          areacode.current = areacodefirst;
          break;
        case "303":
          areacodefirst = "Z064";
          areacode.current = areacodefirst;
          break;
        case "304":
          areacodefirst = "Z065";
          areacode.current = areacodefirst;
          break;
        case "305":
          areacodefirst = "Z066";
          areacode.current = areacodefirst;
          break;
  
        case "400":
          areacodefirst = "Z031";
          areacode.current = areacodefirst;
          break;
        case "401":
          areacodefirst = "Z032";
          areacode.current = areacodefirst;
          break;
        case "402":
          areacodefirst = "Z033";
          areacode.current = areacodefirst;
          break;
        case "403":
          areacodefirst = "Z034";
          areacode.current = areacodefirst;
          break;
  
        case "500":
          areacodefirst = "Z021";
          areacode.current = areacodefirst;
          break;
        case "501":
          areacodefirst = "Z022";
          areacode.current = areacodefirst;
          break;
        case "502":
          areacodefirst = "Z023";
          areacode.current = areacodefirst;
          break;
        case "503":
          areacodefirst = "Z024";
          areacode.current = areacodefirst;
          break;
        case "504":
          areacodefirst = "Z025";
          areacode.current = areacodefirst;
          break;
        case "505":
          areacodefirst = "Z026";
          areacode.current = areacodefirst;
          break;
  
        case "600":
          areacodefirst = "Z071";
          areacode.current = areacodefirst;
          break;
        case "601":
          areacodefirst = "Z072";
          areacode.current = areacodefirst;
          break;
        case "602":
          areacodefirst = "Z073";
          areacode.current = areacodefirst;
          break;
        case "603":
          areacodefirst = "Z074";
          areacode.current = areacodefirst;
          break;
        case "604":
          areacodefirst = "Z075";
          areacode.current = areacodefirst;
          break;
  
        case "700":
          areacodefirst = "Z081";
          areacode.current = areacodefirst;
          break;
        case "701":
          areacodefirst = "Z082";
          areacode.current = areacodefirst;
          break;
        case "702":
          areacodefirst = "Z083";
          areacode.current = areacodefirst;
          break;
        case "703":
          areacodefirst = "Z084";
          areacode.current = areacodefirst;
          break;
  
        case "800":
          areacodefirst = "Z091";
          areacode.current = areacodefirst;
          break;
        case "801":
          areacodefirst = "Z092";
          areacode.current = areacodefirst;
          break;
        case "802":
          areacodefirst = "Z093";
          areacode.current = areacodefirst;
          break;
        case "803":
          areacodefirst = "Z094";
          areacode.current = areacodefirst;
          break;
        case "804":
          areacodefirst = "Z095";
          areacode.current = areacodefirst;
          break;
        case "805":
          areacodefirst = "Z096";
          areacode.current = areacodefirst;
          break;
        case "806":
          areacodefirst = "Z097";
          areacode.current = areacodefirst;
          break;
        case "807":
          areacodefirst = "Z098";
          areacode.current = areacodefirst;
          break;
  
        default:
          break;
      }


  }, []);

  useEffect(() => {
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
      setloading(true)
      axios
      .get(
        `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&large_area=${areacodefirst}&special_category=SPG5&count=50`
        )
      .then(function (nn) {
        settokyo2(nn.data.results.shop);
        setloading(false)
      })
      .catch((error) => {
        console.log(error)
        setloading(false)
      });
  }, [areacodefirst]);

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
    
    let areacodedone = areacode.current;
    let bb = tokyo.filter((item) => item.large_area.code === areacodedone);
    let gg = tokyo2.map((i) => i.middle_area.code).shift();

    const dd =useCallback( (data, index, a) => {
      setpage((index - 1) * per);
      setpagenumber(index);
      animateScroll.scrollToTop()
      console.log(1);
  },[]);


  const area =useCallback( (event, expanded) => {
    setexpanded(expanded);
    console.log(2);
  },[]);

  const areachange =useCallback( (t) => {
    setloading(true)

    const code = t.target.id;
    const code2 = t.target.value;
    setfirsttext("");

    axios
      .get(
        `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${code}&count=50`
      )
      .then(function (nn) {
        settokyo2(nn.data.results.shop);
        setloading(false)

      })
      .catch((error) =>{
        console.log(error)
        setloading(false)
      } 
      );

    setexpanded(false);
    setval(0);
    setcondition("");
    setjoker("");
    setjoker2("");
    setarescondition(code2);
    setpage(0);
    setpagenumber(1);
    seterror("");
  },[]);

  const click=useCallback((e)=>{
    if (firsttext!=='') {
      alert('最初にエリアを選択してください')
      return;
    }
    setloading(true)
    let url = "";

    if (gg == null) {
      gg = areacode2.current;

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
      setloading(false)
      const data = nn.data.results.shop;
      if (data.length === 0) {
        seterror(mes);
        areacode2.current = gg;
        detailareacode = bb;
      }
    })
    .catch((error) =>console.log(error));

  },[tokyo2])


  const moneychange =useCallback( (e) => {
    console.log(1000);
    
    if (firsttext!=='') {
      alert('最初にエリアを選択してください')
      return;
    }
    setloading(true)
    if (gg == null) {
      gg   = areacode2.current;
    }
    
    if (error !== "") {
      seterror("");
    }
  
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
      setloading(false)
      const data = nn.data.results.shop;
            if (data.length === 0) {
              seterror(mes);
              areacode2.current = gg;
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
  };

  const word2 = (e) => {
    let gg = tokyo2.map((i) => i.middle_area.code).shift();
    const ww = search;

    if (search === "") {
      alert("文字を入力してください");
      return;
    }
    if (gg == null) {
      gg   = areacode2.current;
    }
    setloading(true)
    axios
      .get(
        `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name_any=${ww}&middle_area=${gg}&count=50`
      )
      .then(function (kk) {
        settokyo2(kk.data.results.shop);
      setloading(false)
        const data = kk.data.results.shop;
        if (data.length === 0) {
          seterror(mes);
          areacode2.current = gg;
        }
      })
      .catch((error) => console.log(error));

    setsearch("");
    setcondition(`店名検索・キーワード「${search}」`);
    setval(0);
    setpage(0);
    setpagenumber(1);
  };

  const word3 = (e) => {
    let gg = tokyo2.map((i) => i.middle_area.code).shift();
    const ww = search;

    if (e.key === "Enter") {
      if (search === "") {
        alert("文字を入力してください");
        return;
      }
      if (gg == null) {
        gg   = areacode2.current;
      }
      setloading(true)
      axios
        .get(
          `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name_any=${ww}&middle_area=${gg}&count=50`
        )
        .then(function (kk) {
          settokyo2(kk.data.results.shop);
          const data = kk.data.results.shop;
      setloading(false)
          if (data.length === 0) {
            seterror(mes);
            areacode2.current = gg;
          }
        })
        .catch((error) => console.log(error));

      setsearch("");
    setcondition(`店名検索→キーワード「${search}」`);
      setval(0);
      setpage(0);
      setpagenumber(1);
    }
  };

    window.addEventListener('popstate',e=>{
        window.location.reload();
     
    })
  

  const display=()=>{

    return(
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
        <div>
      <Link to={'/'} className={style.backbtn}>都道府県の選択へ戻る</Link>
        </div>
      </div>

      <p className={style.first}>{firsttext}</p>
      <Conditionstatus m={areacondition} mm={condition}/>
      <p className={style.error}>{error}</p>

      <Shoplist list={tokyo2} 
      page={pages} 
      />

      <Pagenation
        count={tokyo2}
        amount={per}
        change={dd}
        numbercolor={pagenumber}
      /> 
        </>
    )
  }

  return (
    <>
{loading?<Loading/>:display()}
    </>
  );
})

export default App;
