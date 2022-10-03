import React from 'react'
import Cart from './CartWidget'

const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Cart/></a>
            </li>
        </>
    )
}

export default Secciones