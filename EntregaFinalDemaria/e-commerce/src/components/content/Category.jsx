import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import { getItems } from '../../utils/firebase';
import '../../styles/App.css'

const Category = () => {
    const [items, setItems] = useState([]);
    const {idCategory} = useParams()

    useEffect(() => {
        getItems().then(productos => {
            const itemCategory = productos.filter(items => items.idCat = items[1].idCat)
            const card = itemCategory.map(producto => 
                <div className="card cardCat" key={producto[0]} style={{width: '18rem'}}>
                    <img className="card-img-top" src={producto[1].img} alt={producto[1].title} />
                    <div className="card-body">
                        <h4 className="card-title">{producto[1].title}</h4>
                        <h5 className="card-text">${producto[1].price}</h5>
                    </div>
                    <button className="btn btn-primary"><Link className='nav-link' to={"/item/" + producto[0]}>Ver Detalle</Link></button>   
                </div>)
            setItems(card)
        })

    }, [idCategory]);
    
    return (
        <>
            <div className='row bodyCat'>
                {items}
            </div>
        </>
    );
}
export default Category;
