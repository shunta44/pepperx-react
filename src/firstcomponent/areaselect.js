import { memo } from "react";
import Button from '@mui/material/Button';

// import Preselect from './firstcomponent/preselect'
import Provider from "./globalstate";
import Preselect from "./preselect";
import Preselect2 from "./preselect_not_bunki";
import { useContext } from "react";
import { Context } from "./globalstate";

const Areaselect=memo((props)=>{
const{state,click,close,open,branch}=props
// const{open,click}=props
console.log(111)

return(
    <>
    <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={click}
        // onMouseLeave={handleClick2}
        value={10}
        >
        北海道・東北
      </Button>

      <Button
        id="basic-button2"
        variant='contained'
        aria-controls={open ? 'basic-menu2' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={click}
        // onMouseEnter={click2}
        // onMouseLeave={handleClick2}
        value={20}
      >
        関東
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={click}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
        value={30}
      >
        北陸・甲信越
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={click}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
        value={40}
      >
    中部
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={click}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
        value={50}
        >
    関西
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={click}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
        value={60}
        >
    中国
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={click}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
        value={70}
      >
    四国
      </Button>
      <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={click}
        // onMouseLeave={handleClick2}
        // onClick={handleClick}
        value={80}
      >
    九州・沖縄
      </Button>

  {/* ファイルを分岐させる時 */}
{/* <Provider> */}
  {/* <Preselect state={state} close={close}/> */}
{/* </Provider> */}


  <Preselect2 state={state} close={close} branch={branch}/>

{/* <Preselect close={handleClose} branch={jack} state={anchorEl} 
      open={open} open2={open2} open3={open3} open4={open4} open5={open5} open6={open6} open7={open7} open8={open8}
      pre={dd} pre2={aa} pre3={ee} pre4={cc} pre5={bb} pre6={ff} pre7={gg} pre8={hh}
      /> */}
        </>


)



})

export default Areaselect;