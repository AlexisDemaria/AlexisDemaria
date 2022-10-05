import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './content/Navbar'
import Home from './content/Home';
import Item from './content/ItemDetailContainer'
import Category from './content/Category';
import SobreNosotros from './content/SobreNosotros'
import Contacto from './content/Contacto'
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
                    <Route path="/sobreNosotros" element={<SobreNosotros/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
