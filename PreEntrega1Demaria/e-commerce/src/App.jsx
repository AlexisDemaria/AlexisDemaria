import React from 'react';
import Navbar from './components/Navbar'
import Cards from   './components/ItemListContainer'
import './App.css'

const App = () => {
    return (
        <>
            <Navbar/>
            <Cards title="Electro-House"/>
        </>
    )
}

export default App;
