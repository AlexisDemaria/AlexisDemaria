import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { buscarStock } from '../layouts/itemListContainer/ItemListContainer';
import ItemDetail from '../layouts/itemListContainer/ItemDetail';

const Item = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        buscarStock('../json/stock.json').then(items => {
            const prod = items.find(itemArray => itemArray.id == id)
            setItem(prod)
        })
    }, [])

    return (
        <>
            <ItemDetail item={item}/>
        </>
    );
}

export default Item;
