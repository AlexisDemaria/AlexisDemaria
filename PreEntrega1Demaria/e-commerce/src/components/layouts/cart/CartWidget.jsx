import React from 'react'

const Cart = () => {
    return (
        <>
            <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="bi-cart-fill me-1" />Carro
                <span id="contadorCarrito" className="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
        </>
    )
}

export default Cart