import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { CarroContext } from '../../context/CarroContext';

const Cart = () => {
    const {carro, removeItem, clearCart, totalPrice} = useContext(CarroContext)
    const [cartCard, setCartCard] = useState([]);

    useEffect(() => {
        const mostrarItems = carro.map(item =>
            <div className="card totalCart" key={item.id} >
                <img className="card-img-top" src={item.docs.img} alt={item.docs.title} />
                <h4 className="card-title">{item.docs.title}</h4>
                <h5 className=''>{item.quantity}</h5>
                <h5 className="card-title">${item.docs.price * item.quantity}</h5>
                <button className="btn btn-secondary" onClick={() => removeItem(item.id)}><i className="bi bi-trash"></i></button> 
            </div>
            )
        setCartCard(mostrarItems)
    }, [carro, removeItem, clearCart]);
    
    const backHome = (carro.length !== 0) ? 
        <div className='row cardCart'> 
            {cartCard}
            <h3>Total ${totalPrice()}</h3>
            <div className='buttons'>
                <button className='btn btn-secondary' onClick={() => clearCart()}>Vaciar carrito</button>
                <Link className='btn btn-success' to={'/checkout'}>Comprar</Link>
            </div> 
        </div> :
        <> 
        <div className='cartEmpty'>
            <h4>¡Vaya! No hay productos en su carro. Haga click en el botón para añadir productos.</h4> 
            <Link className="btn btn-primary" to={"/"}>Ir a agregar productos</Link>
        </div>
        </>

        return backHome
}

export default Cart;