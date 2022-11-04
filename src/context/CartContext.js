import { useContext, useState } from "react";
import { createContext } from "react";

const CartContext = createContext([])

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const add = (name, quantity, price, image) => {
        let newItem = { name, quantity, price, image }

        let added = cart.find(item => item.name === newItem.name)

        if (added !== undefined) {
            added.quantity += newItem.quantity
        } else {
            setCart(cart => cart.concat(newItem))
        }
    }

    const context = {
        cart,
        add
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider }