import React, { useState, createContext } from 'react'

export const CartContext = createContext({});

function CartProvider({ children }){
     const [cart, setCart] = useState([]);

    function additemCart(newItem){
        const indexItem = cart.findIndex(item => item.id == newItem.id)

        if(indexItem !== -1){
        }

        let data = {
            ...newItem, 
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
        console.log([...cart, data])
    }
     return (
        <CartContext.Provider
        value={{
            cart,
            additemCart
        }}
        >
            {children}            
        </CartContext.Provider>
     )
}

export default CartProvider;
