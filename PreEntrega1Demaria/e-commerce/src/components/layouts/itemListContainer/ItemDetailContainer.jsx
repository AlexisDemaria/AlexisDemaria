import React from 'react';

const ItemDetailContainer = ({item}) => {
    return (
        <>            
        <div className="card" style={{width: '30rem'}}>
            <img className="card-img-top" src={"../img/" + item.pictureUrl} alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Marca: {item.description}</p>
                        <p className="card-text">Precio: ${item.price}</p>
                        <button className="btn btn-primary">Comprar</button>   
                    </div>
        </div>
        </>
    );
}

export default ItemDetailContainer;
