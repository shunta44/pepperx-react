import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';


function Code() {


    useEffect(()=>{

  // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/service_area/v1/?format=json&key=52f717020342571a')
  // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/large_area/v1/?format=json&key=52f717020342571a')
  // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/middle_area/v1/?format=json&key=52f717020342571a')
  // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/small_area/v1/?format=json&key=52f717020342571a')
//   axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/genre/v1/?format=json&key=52f717020342571a')
  // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/budget/v1/?format=json&key=52f717020342571a')
  axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/special_category/v1/?format=json&key=52f717020342571a')
  // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name=魚')
//   axios.get(`https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name=魚`)
//   axios.get(`https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&name=${ww}`)
//   axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/budget/v1/?format=json&key=52f717020342571a')
  // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/large_area/v1/?format=json&key=52f717020342571a')
//   axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&special&count=5')
  
  .then(function(ss){
    console.log(ss.data.results)
})
.catch(error => console.log(error))

    },[])
    
}

export default Code;