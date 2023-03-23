import React, { useState, createContext } from 'react'

export const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function additemCart(newItem) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            // console.log("This item is already in the cart")
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList)
            return;
        } 

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
        
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
