import {Link} from 'react-router-dom'
import React from 'react'

const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/sobreNosotros"}>Sobre Nosotros</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/contacto"}>Contacto</Link>
            </li>
        </>
    )
}

export default Secciones