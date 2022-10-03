import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorías</a>
                <div className="dropdown-menu">
                    <Link className='dropdown-item' to={"/category/1"}>Domésticos</Link>
                    <Link className='dropdown-item' to={"/category/2"}>Industriales</Link>
                </div>
            </li>
        </>
    )
}

export default Dropdown