import React from "react";
import Toggler from "../layouts/Toggler";
import Secciones from "../layouts/Secciones";
import Dropdown from "../layouts/Dropdown";
import Cart from "../layouts/cart/CartWidget";
import Contador from "../layouts/itemCount/ItemCount";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className='navbar-brand' to="/">Home</NavLink>
                    <Toggler/>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                        <Secciones/>
                        <Dropdown/>
                        <Contador/>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <a className="nav-link" href="#"><Cart/></a>
                        </ul>
                    </div>
                </div>
        </nav>  
    </>
    )
}

export default Navbar