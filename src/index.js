import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {Store} from './store/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/login';
import Artists from './pages/artists';
import Home from './pages/home';
import Tracks from './pages/tracks';
import { GlobalStyle } from './globalStyles';
import NavbarComponent from './components/Navbar';
import Loading  from './components/loading/index';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Provider store={Store}>
      <BrowserRouter>
      <div>
        <Loading/>
        <Routes>
            <Route path='/' element={<div></div>}/>
            <Route path='/*' element={<NavbarComponent/>}/>
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='tracks' element={<Tracks/>}/>
          <Route path='artists' element={<Artists/>}/>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
