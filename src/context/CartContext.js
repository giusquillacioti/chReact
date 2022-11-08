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

        if (added !== undefined) {
            added.quantity += newItem.quantity
        } else {
            setCart(cart => cart.concat(newItem))
        }
    }

    const remove = (id, name) => {
        let removeIndex = cart.findIndex(item => item.id === id);
        cart.splice(removeIndex, 1)

        Swal.fire({
            text: `Se eliminó ${name} del carrito.`,
            icon: 'success',
            toast: true,
            position: 'bottom-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })
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