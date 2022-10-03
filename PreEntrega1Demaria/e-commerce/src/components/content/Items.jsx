import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { buscarStock } from '../layouts/itemListContainer/ItemListContainer';
import ItemDetailContainer from '../layouts/itemListContainer/ItemDetailContainer';

const Items = () => {
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
            <ItemDetailContainer item={item}/>
        </>
    );
}

export default Items;
