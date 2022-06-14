import { memo } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import style from '../style.module.css'

import { Context } from "./globalstate";
import { useContext } from "react";

import Providerx from "./customfook";


const Preselect2=memo((props)=>{
  console.log(222)

    // const{close,branch,state,open,open2,open3,open4,open5,open6,open7,open8,
    //       pre,pre2,pre3,pre4,pre5,pre6,pre7,pre8,pp}=props

    const{close,state,branch}=props;

          //   console.log(state)

          // useContextから呼び出し
        //   const {jack2,data}=useContext(Context)
 
          // カスタムフックから呼び出し
          // const rock=Providerx()
          // const [{jack5},data2]=Providerx()

  const open = Boolean(state.contents);
  const open2 = Boolean(state.contents2);
  const open3 = Boolean(state.contents3);
  const open4 = Boolean(state.contents4);
  const open5 = Boolean(state.contents5);
  const open6 = Boolean(state.contents6);
  const open7 = Boolean(state.contents7);
  const open8 = Boolean(state.contents8);

const areacode=state.data.map(i=>i.name)

// // 東京
const aa=areacode.splice(0,7)
// // 関西
const bb=areacode.splice(0,6)
// // 中部
const cc=areacode.splice(0,4)
// // 北海道
const dd=areacode.splice(0,7)
// // 北陸
const ee=areacode.splice(0,6)
// // 中国
const ff=areacode.splice(0,5)
// // 四国
const gg=areacode.splice(0,4)

return(    
    <>

    <Menu
    onMouseLeave={close}
    className={style.ss}
    id="basic-menu"
    anchorEl={state.contents}
    open={open}
    onClose={close}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
    >
        <div className={style.ss} onMouseLeave={close}>
        {dd.map((i,index)=>(
      <MenuItem onClick={branch} id={index} value={10} key={index}>{i}</MenuItem>
      // <MenuItem onClick={rock.jack5} id={index} value={10} key={index}>{i}</MenuItem>
            ))}
        </div>
    </Menu>

    <Menu
    onMouseLeave={close}
    className={style.ss}
      id="basic-menu2"
      anchorEl={state.contents2}
      open={open2}
      onClose={close}
      MenuListProps={{
          'aria-labelledby': 'basic-button',
      }}
    >
        <div className={style.ss} onMouseLeave={close}>
        {aa.map((i,index)=>(
      <MenuItem onClick={branch} id={index} value={20} key={index}>{i}</MenuItem>      
            ))}
    </div>
    </Menu>

    <Menu
    onMouseLeave={close}
    className={style.ss}
      id="basic-menu2"
      anchorEl={state.contents3}
      open={open3}
      onClose={close}
      MenuListProps={{
          'aria-labelledby': 'basic-button',
      }}
    >
        <div className={style.ss} onMouseLeave={close}>
        {ee.map((i,index)=>(
      <MenuItem onClick={branch} id={index} value={30} key={index}>{i}</MenuItem>
            ))}
    </div>
    </Menu>

    <Menu
    onMouseLeave={close}
    className={style.ss}
      id="basic-menu2"
      anchorEl={state.contents4}
      open={open4}
      onClose={close}
      MenuListProps={{
          'aria-labelledby': 'basic-button',
      }}
    >
        <div className={style.ss} onMouseLeave={close}>
        {cc.map((i,index)=>(
        <MenuItem onClick={branch} id={index} value={40} key={index}>{i}</MenuItem>
            ))}
    </div>
    </Menu>

    <Menu
    onMouseLeave={close}
    className={style.ss}
      id="basic-menu2"
      anchorEl={state.contents5}
      open={open5}
      onClose={close}
      MenuListProps={{
          'aria-labelledby': 'basic-button',
      }}
    >
        <div className={style.ss} onMouseLeave={close}>
        {bb.map((i,index)=>(
             <MenuItem onClick={branch} id={index} value={50} key={index}>{i}</MenuItem>
            ))}
    </div>
    </Menu>
    <Menu
    onMouseLeave={close}
    className={style.ss}
      id="basic-menu2"
      anchorEl={state.contents6}
      open={open6}
      onClose={close}
      MenuListProps={{
          'aria-labelledby': 'basic-button',
      }}
    >
        <div className={style.ss} onMouseLeave={close}>
        {ff.map((i,index)=>(
            <MenuItem onClick={branch} id={index} value={60} key={index}>{i}</MenuItem>
            ))}
    </div>
    </Menu>
    <Menu
    onMouseLeave={close}
    className={style.ss}
      id="basic-menu2"
      anchorEl={state.contents7}
      open={open7}
      onClose={close}
      MenuListProps={{
          'aria-labelledby': 'basic-button',
      }}
    >
        <div className={style.ss} onMouseLeave={close}>
        {gg.map((i,index)=>(
             <MenuItem onClick={branch} id={index} value={70} key={index}>{i}</MenuItem>
            ))}
    </div>
    </Menu>
    <Menu
    onMouseLeave={close}
    className={style.ss}
      id="basic-menu2"
      anchorEl={state.contents8}
      open={open8}
      onClose={close}
      MenuListProps={{
          'aria-labelledby': 'basic-button',
      }}
    >
        <div className={style.ss} onMouseLeave={close}>
        {areacode.map((i,index)=>(
          <MenuItem onClick={branch} id={index} value={80} key={index}>{i}</MenuItem>
            ))}
    </div>
    </Menu>


    </>
    
)
})

export default Preselect2;