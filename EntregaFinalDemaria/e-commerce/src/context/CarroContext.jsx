import React, {createContext, useState} from 'react';

const CarroContext = createContext()

const CarroProvider = (props) => {
    const [carro, setCarro] = useState([]);
    
    const addItem = (item, cont) => {
        let n = carro.findIndex(items => items.id === item[0])
    
        if(n !== -1){
            carro[n].quantity = cont
        }else{
            const itemCarro = {id: item[0], docs: item[1], quantity: cont}
            carro.push(itemCarro)
        }
        setCarro(carro)
    }
    const removeItem = (item) => {
        setCarro(carro.filter((prod) => prod.id !== item))
        }

    const clearCart = () => setCarro([])

    const totalPrice = () => {
        return carro.reduce((suma, item) => suma + item.quantity * item.docs.price, 0)
    }
    
    return (
        <>  
        <CarroContext.Provider value={{carro, addItem, removeItem, clearCart, totalPrice}}>
            {props.children}
        </CarroContext.Provider>
        </>
    );
}

export {CarroContext, CarroProvider};
