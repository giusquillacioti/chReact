import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

const CartContext = createContext([])

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const add = (id, name, quantity, price, image, stock) => {
        let newItem = { id, name, quantity, price, image, stock }

        let added = cart.find(item => item.id === newItem.id)
        const addedIndex = cart.indexOf(added);
        const copyOfCart = [...cart]

        if (added) {
            copyOfCart[addedIndex].quantity += newItem.quantity
            setCart(copyOfCart)
        } else {
            setCart(cart => cart.concat(newItem))
        }
    }

    const remove = (id) => {
        let removeIndex = cart.findIndex(item => item.id === id);
        const copyOfCart = [...cart]
        copyOfCart.splice(removeIndex, 1)
        setCart(copyOfCart)
    }

    const emptyCart = () => {
        setCart([])
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

    const updateStock = () => {
        cart.forEach(product => {

            let productId = product.id
            let newStock = product.stock - product.quantity

            const database = getFirestore();
            const productDoc = doc(database, 'products', productId);
            updateDoc(productDoc, { stock: newStock })
        });
    }

    const context = {
        cart,
        add,
        remove,
        emptyCart,
        calcTotal,
        calcItems,
        updateStock
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider }