import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import BasicMenu from './location';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

<BrowserRouter basename={process.env.PUBLIC_URL}>
<Routes>
<Route path={`/`} element={<BasicMenu />} />
  <Route path='/main' element={<App/>}/>
</Routes>
</BrowserRouter>

  </>
);
reportWebVitals();
