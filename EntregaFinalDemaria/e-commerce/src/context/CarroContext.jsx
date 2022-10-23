import React, {createContext, useState} from 'react';

const CarroContext = createContext()

const CarroProvider = (props) => {
    const [carro, setCarro] = useState([]);
    
    const addItem = (item, cont) => {
        const aux = carro
        let index = aux.findIndex(items => items.id === item[0])
        
        if(index !== -1){
            aux[index].quantity = cont
        }else{
            const itemCarro = {id: item[0], quantity: cont}
            aux.push(itemCarro)
        }
        setCarro(aux)
        console.log(carro)
    }

    const removeItem = (item) => {
        const aux = carro
        let index = aux.findIndex(items => items.id === item[0])
        aux.splice(index, 1)
        setCarro(aux)
        console.log(carro)
    }

    const clearCart = () => setCarro([])

    const totalPrice = () => {
        return carro.reduce((suma, cont) => suma + cont.quantity * cont.price, 0)
    }

    const totalItems = () => carro.reduce((cont, itemTotal) => cont + itemTotal.quantity, 0)
    
    return (
        <>  
            <CarroContext.Provider value={{carro, addItem, removeItem, clearCart, totalPrice, totalItems}}>
                {props.children}
            </CarroContext.Provider>
        </>
    );
}

export {CarroContext, CarroProvider};
