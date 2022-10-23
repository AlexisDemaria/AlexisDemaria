import React, {useContext, useEffect, useState} from 'react';
import {CarroContext} from '../../context/CarroContext';

const Cart = () => {
    const {carro, addItem, removeItem} = useContext(CarroContext)
    const [cart, setCart] = useState(carro);

    useEffect(() => {
        return () => {
            console.log(cart)
        };
    }, []);
    return (
        <>
            <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-header">Carro</div>
            <div className="card-body">
                {/* <h3 className="card-title">{item[1].title}</h3> */}
                <h4 className="card-title">Primary card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-secondary" onClick={() => removeItem(cart)}>Eliminar</button> 
            </div>
            </div>
        </>
    );
}

export default Cart;
