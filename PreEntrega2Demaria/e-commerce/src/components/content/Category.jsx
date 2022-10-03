import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { buscarStock } from '../layouts/itemListContainer/ItemListContainer';

const Category = () => {
    const [items, setItems] = useState([]);
    const {idCategory} = useParams()
    useEffect(() => {
        buscarStock('../json/stock.json').then(items => {
            const itemCategory = items.filter(item => item.idCat == idCategory)
            const card = itemCategory.map(producto => 
                <div className="card" key={producto.id} style={{width: '18rem'}}>
                    <img className="card-img-top" src={"../img/" + producto.pictureUrl} alt={producto.title} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">Marca: {producto.description}</p>
                        <p className="card-text">Precio: ${producto.price}</p>
                        <button className="btn btn-primary"><Link className='nav-link' to={"/item/" + producto.id}>Ver Producto</Link></button>   
                    </div>
                </div>)
            setItems(card)
        })
    }, [idCategory]);
    return (
        <>
            <div className='row'>
                {items}
            </div>
        </>
    );
}

export default Category;
