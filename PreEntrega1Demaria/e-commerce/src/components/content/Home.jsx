import React, {useState, useEffect} from 'react';
import {buscarStock} from '../layouts/itemListContainer/ItemListContainer';
import {Link} from 'react-router-dom'

const Home = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        buscarStock().then(productos => {
            const card = productos.map(producto => 
                <div className="card" key={producto.id} style={{width: '18rem'}}>
                    <img className="card-img-top" src={"./img/" + producto.pictureUrl} alt={producto.title} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">Marca: {producto.description}</p>
                        <p className="card-text">Precio: ${producto.price}</p>
                        <button className="btn btn-primary"><Link className='nav-link' to={"/item/" + producto.id}>Ver Producto</Link></button>   
                    </div>
                </div>
            )
            setProductos(card)
        })
    }, [])

    return (
        <>
        <div className="row">
            {productos}
        </div>
        </>
    );
}

export default Home;
