import React from 'react'
import { Link }  from 'react-router-dom';

const Cart = () => {
    return (
        <>
        <li className='nav-item'>
            <Link className='nav-link btn btn-outline-dark' to={'/cart'}><i className="bi-cart-fill me-1"/></Link>
        </li>
        </>
    )
}

export default Cart;