import React, {useContext, useEffect, useState} from 'react';
import {CarroContext} from '../../context/CarroContext';
import {Link} from 'react-router-dom';

const Cart = () => {
    const {carro, removeItem, clearCart} = useContext(CarroContext)
    const [cartCard, setCartCard] = useState([]);

    useEffect(() => {
        const mostrarItems = carro.map(item =>
            <div className="card totalCart" key={item.id} style={{width: '30rem'}}>
                <img className="card-img-top" src={item.img} alt={item.title} />
                <h3 className="card-title">{item.title}</h3>
                <h5 className=''>Cantidad {item.cont}</h5>
                <h4 className="card-title">{item.price}</h4>
                <button className="btn btn-secondary" onClick={() => removeItem(item)}><i className="bi bi-trash"></i></button> 
            </div>
            )
        setCartCard(mostrarItems)
        
    }, [carro, removeItem, clearCart]);
    
    const backHome = (carro.length !== 0) ? 
        <div className='row cardCart'> 
            {cartCard}
            <div >
                <button className='btn btn-secondary' onClick={() => clearCart()}>Vaciar carrito</button>
                <Link className='btn btn-success' to={'/checkout'}>Comprar</Link>
            </div> 
        </div> :
        
            <> 
            <div className='carroVacio'>
                <h4>¡Vaya! No hay productos en su carro. Haga click en el botón para añadir productos.</h4> 
                <Link className="btn btn-primary" to={"/"}>Ir a agregar productos</Link>
            </div>
            </>
        return backHome
}

export default Cart;