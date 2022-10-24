import React from "react";
import Toggler from "../layouts/NavBar/Toggler";
import Secciones from "../layouts/NavBar/Secciones";
import Dropdown from "../layouts/NavBar/Dropdown";
import Cart from "../layouts/cart/CartWidget";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className='navbar-brand' to="/">Inicio</NavLink>
                    <Toggler/>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Secciones/>
                            <Dropdown/>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <Link><Cart/></Link>
                        </ul>
                    </div>
                </div>
        </nav>  
    </>
    )
}

export default Navbar