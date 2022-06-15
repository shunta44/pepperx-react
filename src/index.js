import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Code from './code';
import Page from './page';
import Tokyo from './mainpage/tokyo';
import North from './mainpage/north';
import Hokuriku from './mainpage/hokuriku';
import Tyubu from './mainpage/tyubu';
import Kansai from './mainpage/kansai';
import Tyugoku from './mainpage/tyugoku';
import Sikoku from './mainpage/sikoku';
import Kyushu from './mainpage/kyushu';

import Acodion from './acodion';

import BasicMenux from './locationx';
// import BasicMenu from './location1';
import Select from './select';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Preselect from "./firstcomponent/preselect";
import Provider from "./firstcomponent/globalstate";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* // <React.StrictMode> */}
    {/* <App />, */}
    {/* <BasicMenu /> */}
{/* <Kanagawa/> */}
{/* <Acodion/> */}
{/* <Select/> */}
{/* <Route path={`/`} element={<BasicMenu />} /> */}
<BrowserRouter basename={process.env.PUBLIC_URL}>
{/* <Provider> */}
{/* <Provider2> */}
<Routes>
<Route path={`/`} element={<BasicMenux />} />
  <Route path='/Tokyo' element={<Tokyo/>}/>

  {/* ファイル分ける場合 */}
  {/* <Route path='/North' element={<North/>}/>
  <Route path='/Hokuriku' element={<Hokuriku/>}/>
  <Route path='/Tyubu' element={<Tyubu/>}/>
  <Route path='/Kansai' element={<Kansai/>}/>
  <Route path='/Tyugoku' element={<Tyugoku/>}/>
  <Route path='/Sikoku' element={<Sikoku/>}/>
<Route path='/Kyushu' element={<Kyushu/>}/> */}
</Routes>
{/* </Provider2> */}
{/* </Provider> */}
</BrowserRouter>


{/* <Bunki/> */}
    {/* <Tokyo/> */}
    {/* <Code/> */}
    {/* <Page/> */}
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
