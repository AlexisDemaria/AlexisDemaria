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

        // const isInCart = carro.some(items => items.id === item[0]) 
        // if (isInCart){ 
        //     const prod = carro.map (item => {
        //         if (item.id === item[0]){
        //             item.quantity++
        //         }
        //     })
        // } else {
        //     const itemCarro = {id: item[0], docs: item[1], quantity: cont}
        //     carro.push(itemCarro)
        // }
        setCarro(carro)
        console.log(carro)
    }

    const removeItem = (item) => {
        const prod = carro.find((items) => items.id === item[0])
        const n = carro.indexOf(prod)
        carro.splice(n, 1)
        setCarro(carro)
        console.log(carro)
    }

    const clearCart = () => setCarro([])

    const totalPrice = () => {
        return carro.reduce((suma, cont) => suma + cont.quantity * cont.price, 0)
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
