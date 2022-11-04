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

    const remove = (name) => {
        let removeIndex = cart.findIndex(item=> item.name === name);
        cart.splice(removeIndex, 1)
        console.log(`removed ${name} from cart`);
    }

    const emptyCart = () => {
        cart.length = 0
    }

    const calcTotal = () => {
        let itemTotal = cart.map(item => item.price * item.quantity);
        const total = itemTotal.reduce((acc, currentValue) => acc + currentValue, 0);
        return total
    }

    const calcItems = () => {
        let itemTotal = cart.map(item => item.quantity);
        const total = itemTotal.reduce((acc, currentValue) => acc + currentValue, 0);
        return total
    }

    const context = {
        cart,
        add,
        remove,
        emptyCart,
        calcTotal,
        calcItems
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider }