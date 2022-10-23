import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './content/Home';
import Navbar from './content/Navbar'
import Item from './layouts/Item/Item'
import Category from './content/Category';
import Contacto from './content/Contacto'
import Cart from './content/Cart';
import Checkout from './content/Checkout';
import Error404 from './content/Error404';
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
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
