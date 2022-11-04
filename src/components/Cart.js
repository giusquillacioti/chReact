import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {

    const { cart } = useCart()

    const [cartState, setCartState] = useState(cart)
    const [empty, setEmpty] = useState(true)

    useEffect(() => {
        if (cart.length !== 0) {
            setEmpty(false)
        }
    })  

    const calcTotal = () => {
        let itemTotal = cart.map(item => item.price * item.quantity);
        const total = itemTotal.reduce((acc, currentValue) => acc + currentValue, 0);
        return total
    }
    let total = calcTotal()

    const update = () => {
        setCartState()
    }

    const emptyCart = () => {
        cart.length = 0
        update()
    }

    return (
        <>
        {empty ?
        <div className="empty">
            <h2>Tu carrito está vacío.</h2>
            <Link to="/">
                <button>Ir a la tienda</button>
            </Link>
        </div>
        :
        <>
            <div className="cartItemsContainer">
                {cart.map(i => <CartItem key={i.name} {...i} update={update} />)}
                <div className="total">
                    <h2>Precio total: ${total} </h2>
                </div>
            </div>
            <div className="buyBtn">
                <button onClick={emptyCart}>Vaciar carrito</button>
                <Link to="/checkout">
                <button>Finalizar compra</button>
                </Link>
            </div>
            </>
        }
        </>
    )
}
export default Cart