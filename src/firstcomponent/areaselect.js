import { memo } from "react";
import Button from '@mui/material/Button';
import Preselect from "./preselect";

const Areaselect=memo((props)=>{
const{state,click,close,open,branch}=props
return(
    <>
    <Button
        id="basic-button"
        variant='contained'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={click}
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
        value={80}
      >
    九州・沖縄
      </Button>

  <Preselect state={state} close={close} branch={branch}/>


        </>


)



})

export default Areaselect;