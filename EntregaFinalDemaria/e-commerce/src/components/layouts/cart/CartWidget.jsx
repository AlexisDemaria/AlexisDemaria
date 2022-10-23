import React from 'react'
import {Link} from 'react-router-dom';

const Cart = () => {
    return (
        <>
        <li className='nav-item'>
            <Link className='nav-link btn btn-outline-dark' to={'/cart'}>
                <i className="bi-cart-fill me-1"/>
                <span id="contadorCarro" className="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </Link>
        </li>
        </>
    )
}

export default Cart;