import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './content/Navbar'
import Home from './content/Home';
import Item from './layouts/Item/Item'
import Category from './content/Category';
import Contacto from './content/Contacto'
import Cart from './content/Cart';
import React from 'react';  
import '../styles/App.css'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/item/:id" element={<Item/>}/>
                    <Route path="/category/:idCategory" element={<Category/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
