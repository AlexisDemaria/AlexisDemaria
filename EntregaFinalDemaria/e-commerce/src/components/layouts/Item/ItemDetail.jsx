import React, {useState, useContext} from 'react';
import {CarroContext} from '../../../context/CarroContext'

const ItemDetail = ({item}) => {
    const [cont, setCont] = useState(1);
    const {addItem} = useContext(CarroContext)
    
    const modCont = (op) => {
        if (op === "+"){
            if(cont < item[1].stock){
                setCont(cont + 1)
            }
        } else{
            if (cont > 1){
                setCont(cont - 1)
            }
        }
    } 

    return (
        <>            
        <div className="card cardDetail" style={{width: '30rem'}}>
            <img className="card-img-top" src={item[1].img} alt={item.title}/>
            <div className="card-body cardDetailComp" >
                <h3 className="card-title">{item[1].title}</h3>
                <h4 className="card-text">{item[1].description}</h4>
                <p className="card-text">Stock disponible <strong>{item[1].stock}</strong></p>
                <h4 className="card-text">${item[1].price}</h4>
                <nav aria-label="Page navigation example">
                    <ul className="pagination cardCont">
                        <li className="page-item"><button className="page-link" onClick={() => modCont('-')}>-</button></li>
                        <li className="page-item"><p className="page-link">{cont}</p></li>
                        <li className="page-item"><button className="page-link" onClick={() => modCont('+')}>+</button></li>
                    </ul>
                </nav>
                <button className="btn btn-primary" onClick={() => addItem(item, cont)}>Agregar al carrito</button>   
            </div>
        </div>
        </>
    );
}

export default ItemDetail;
