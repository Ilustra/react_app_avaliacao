


import React from 'react';

import './App.css';
import './index.css';

import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import DetalhesProfile from './pages/DetalhesProfile';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/detalhes/:id'  element={<DetalhesProfile />}/> 
            </Routes>
        </BrowserRouter>
    );
}