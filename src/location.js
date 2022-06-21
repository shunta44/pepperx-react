import * as React from 'react';
import { Card } from '@mui/material';
import style from './style.module.css'
import { useReducer } from 'react';
import { useCallback, useEffect } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router';

import Fotter from './firstcomponent/fotter'
import Areaselect from './firstcomponent/areaselect'

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

useEffect(()=>{
  axios.get('https://api-cors4544545454.herokuapp.com/http://webservice.recruit.co.jp/hotpepper/large_area/v1/?format=json&key=52f717020342571a')
      
  .then(function(nn){
    dispach({type:'data',value:nn.data.results.large_area})
  })
  .catch(error => console.log(error))
  
},[])

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

  const handleClose =useCallback( () => {
    dispach({type:'reset'})
  },[]);

  const jack=useCallback((t)=>{

history('/main',{state:{i:t.target.value,p:t.target.id}})
  },[history])

  return (
    
    <>
<section className={style.back}>

<Fotter/>

<Card className={style.btnx}>

    <div>
    <Areaselect state={anchorEl} click={handleClick} close={handleClose} branch={jack}/>
    </div>
            </Card>
</section>

</>
  );
}
