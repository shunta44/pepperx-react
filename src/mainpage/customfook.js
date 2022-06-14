import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import axios from 'axios';
import { memo } from "react";


// コンポーネントじゃないからmemo化意味ない
 const Providerx =(props) => {
  
    const rrr='uuuu';


    const aaa=()=>{
        console.log('えええええええ')
    }

  const rock= {rrr,aaa}

  

  // return {jack5,data2}
  return rock
};

export default Providerx;