import React, {useState, useEffect} from 'react';
import { Link}   from 'react-router-dom'
import { getItems } from '../../utils/firebase';

const Home = () => {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        getItems().then(productos => { 
            const card = productos.map(producto => 
                <div className="card cardHome" key={producto[0]} style={{width: '18rem'}}>
                    <img className="card-img-top" src={producto[1].img} alt={producto[1].title} />
                    <div className="card-body">
                        <h4 className="card-title">{producto[1].title}</h4>
                        <h5 className="card-text">${producto[1].price}</h5>
                    </div>
                    <button className="btn btn-primary"><Link className='nav-link' to={"/item/" + producto[0]}>Ver Detalle</Link></button>   
                </div>)
            setProductos(card)
        })
    }, [])

    return (
        <>
        <div className="row bodyHome">
            {productos}
        </div>
        </>
    );
}

export default Home;
