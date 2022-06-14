import { Pagination } from '@mui/material';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function Page() {

  const[shopp,setshop]=useState([])
  const[page,setpage]=useState(0)
    const per=5;

    // onChangeとonPageChangeは取得するデータが違う
    // 一度データは取得してきているので再度APIからデータを取得することはしない
    // ページネーションで切り替えるときに
    // データを何番目から表示させるかをsetpageで指定する

    const cc=(data)=>{
// let nn=data['selected'];
console.log(data.selected*per)

setpage(data.selected*per);
    }
    
    const dd=(data,index)=>{
// console.log(index)
// console.log((index-1)*per)
setpage((index-1)*per)

    }

    useEffect(()=>{
  // axios.get('https://api-cors4544545454.herokuapp.com/https://webservice.recruit.co.jp/hotpepper/special/v1/?format=json&key=52f717020342571a&special_category')
  // axios.get('https://api-cors4544545454.herokuapp.com/https://webservice.recruit.co.jp/hotpepper/special/v1/?format=json&key=sample&special_category=SPG6')
  // axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&special&count=5')
  axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&large_area=Z011&count=50')
//   axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?format=json&key=52f717020342571a&course&count=10')
  // axios.get('http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=52f717020342571a&large_area=Z011')

  .then(function(nn){

  setshop(nn.data.results.shop)
 
  })
  
  .catch(error => console.log(error))
},[])

    return(
        <>
<ul>
{shopp.slice(page,page+per).map(item=>(
    <li>
        <img src={item.logo_image} alt="" />
  <p>{item.name}</p>
  <a href={item.urls.pc} target='branch'>クリック</a>
  <p>{item.access}</p>
  <img src={item.photo.pc.l} alt="" />
  <p>飲み放題→{item.free_drink}</p>
  <p>23時以降の営業→{item.midnight}</p>
      </li>
))}
</ul>


            <ReactPaginate
            previousLabel={'<'}
        nextLabel={'>'}
        // breakLabel={'...'}
        pageCount={Math.ceil(shopp.length/per)} 
        // marginPagesDisplayed={2} 
        // pageRangeDisplayed={5} 
        onPageChange={cc} 
                
       />

       <Pagination
       count={Math.ceil(shopp.length/per)}
       color='primary'
        onChange={dd}
    //    page={page}
       />

        </>

    )
    
}


export default Page;