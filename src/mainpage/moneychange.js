import { useCallback } from 'react';



  const moneychangex = (e) => {

console.log(e.target.value)

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

  switch (e.target.value) {
    case "10":
      const amount = x.slice(0, 2);
      console.log(amount);
      let url1 = "";

      setval(10);
      setjoker2(`budget=${amount}`);
      setpage(0);
      if (error !== "") {
        seterror("");
      }

      if (joker !== "") {
        url1 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount}&count=50&${joker}`;
      } else {
        url1 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount}&count=50`;
      }

      axios
        .get(url1)

        .then(function (nn) {
          settokyo2(nn.data.results.shop);
        })
        .catch((error) => console.log(error));

      break;

    case "20":
      const amount2 = x.slice(2, 4);
      console.log(amount2);
      let url2 = "";

      setval(20);
      setjoker2(`budget=${amount2}`);
      setpage(0);
      if (error !== "") {
        seterror("");
      }

      if (joker !== "") {
        url2 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount2}&count=50&${joker}`;
      } else {
        url2 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount2}&count=50`;
      }

      axios
        .get(url2)

        .then(function (nn) {
          settokyo2(nn.data.results.shop);
        })
        .catch((error) => console.log(error));

      break;

    case "30":
      const amount3 = x.slice(4, 5);
      console.log(amount3);
      let url3 = "";

      setval(30);
      setjoker2(`budget=${amount3}`);
      setpage(0);
      if (error !== "") {
        seterror("");
      }

      if (joker !== "") {
        url3 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount3}&count=50&${joker}`;
      } else {
        url3 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount3}&count=50`;
      }

      axios
        .get(url3)

        .then(function (nn) {
          settokyo2(nn.data.results.shop);
        })
        .catch((error) => console.log(error));

      break;

    case "40":
      const amount4 = x.slice(5, 7);
      console.log(amount4);
      let url4 = "";

      setval(40);
      setjoker2(`budget=${amount4}`);
      setpage(0);
      if (error !== "") {
        seterror("");
      }

      if (joker !== "") {
        url4 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount4}&count=50&${joker}`;
      } else {
        url4 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount4}&count=50`;
      }

      axios
        .get(url4)

        .then(function (nn) {
          settokyo2(nn.data.results.shop);
        })
        .catch((error) => console.log(error));

      break;

    case "50":
      const amount5 = x.slice(7, 9);
      console.log(amount5);
      let url5 = "";

      setval(50);
      setjoker2(`budget=${amount5}`);
      setpage(0);
      if (error !== "") {
        seterror("");
      }

      if (joker !== "") {
        url5 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount5}&count=50&${joker}`;
      } else {
        url5 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount5}&count=50`;
      }

      axios
        .get(url5)

        .then(function (nn) {
          settokyo2(nn.data.results.shop);
          const data = nn.data.results.shop;
          console.log(data);
          if (data.length === 0) {
            // if (Array.length===0の省略)
            seterror(mes);
            areacode.current = gg;
          }
        })
        .catch((error) => console.log(error));

      break;

    case "60":
      const amount6 = x.slice(9, 11);
      console.log(amount6);
      let url6 = "";

      setval(60);
      setjoker2(`budget=${amount6}`);
      setpage(0);
      if (error !== "") {
        seterror("");
      }

      if (joker !== "") {
        url6 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount6}&count=50&${joker}`;
      } else {
        url6 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount6}&count=50`;
      }

      axios
        .get(url6)

        .then(function (nn) {
          settokyo2(nn.data.results.shop);
          const data = nn.data.results.shop;
          console.log(data);
          if (data.length === 0) {
            // if (Array.length===0の省略)
            seterror(mes);
            areacode.current = gg;
          }
          // console.log(jack)
        })
        .catch((error) => console.log(error));

      break;

    case "70":
      const amount7 = x.slice(11, 12);
      console.log(amount7);
      let url7 = "";

      setval(70);
      setjoker2(`budget=${amount7}`);
      setpage(0);
      if (error !== "") {
        seterror("");
      }

      if (joker !== "") {
        url7 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount7}&count=50&${joker}`;
      } else {
        url7 = `https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&middle_area=${gg}&budget=${amount7}&count=50`;
      }

      axios
        .get(url7)

        .then(function (nn) {
          settokyo2(nn.data.results.shop);
          const data = nn.data.results.shop;
          // console.log(data)
          if (data.length === 0) {
            seterror(mes);
            // jack=gg
            areacode.current = gg;
          }
          // console.log(jack)
        })
        .catch((error) => console.log(error));

      break;

    default:
      break;
  }

  }

  export default moneychangex;