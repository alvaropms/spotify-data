import React from "react";
import { Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Artists from './pages/artists';
import Home from './pages/home';
import Tracks from './pages/tracks';
import NavbarComponent from './components/Navbar';
import Loading  from './components/Loading/index';
import MyFooter from './components/Footer/index';


const App = () => {
    return(
        <>
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
            <div>
            <Routes>
                <Route path='/' element={<div></div>}/>
                <Route path='/*' element={<MyFooter/>}/>
            </Routes>
            </div>
        </>
    )
}

export default App