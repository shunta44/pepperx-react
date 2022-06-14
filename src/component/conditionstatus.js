import * as React from 'react';
import style from '../style.module.css'
import { useState } from "react";
import { useMemo } from 'react';
import { memo } from 'react';

const Conditionstatus=memo((props)=> {
    const{m,mm}=props
    console.log('status')

    if (m !== "" || mm !== "") {
    return(
            
              <div className={style.area}>
                <p className={style.firstcondition}>
                  ※最初の条件で表示するにはページを再読み込みしてください
                </p>
                <p>
                  {/* {" "} */}
                  <strong>指定エリア:</strong>
                  {m}
                </p>
                <p>
                  <strong>条件:</strong>
                  {mm}
                </p>
              </div>
            );
            
        }
    
});

export default Conditionstatus;