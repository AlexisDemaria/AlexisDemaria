import React from "react";
import Form from "./Form";
import Dropdown from "./Dropdown";
import Secciones from "./Secciones";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                        <Secciones/>
                        <Dropdown/>
                        </ul>
                        <Form busqueda="Buscar Producto"/>
                    </div>
                </div>
        </nav>  
    </>
    )
}

export default Navbar