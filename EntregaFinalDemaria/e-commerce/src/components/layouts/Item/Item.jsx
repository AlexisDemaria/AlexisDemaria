import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getItemId } from '../../../utils/firebase';
import ItemDetail from './ItemDetail';

const Item = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams()
    
    useEffect(() => {
        getItemId(id).then(item => {setItem(item)
        })
    }, [id])
    
    if (item.length !== 0){
        return (
            <>
            <ItemDetail item={item}/>
            </>
        );  
    } 
}

export default Item;
