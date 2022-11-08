import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"

export const CartBtns = () => {

    const { emptyCart } = useCart()

    return (
        <div className="buyBtn">
            <button onClick={emptyCart}>Vaciar carrito</button>
            <Link to="/checkout">
                <button>Finalizar compra</button>
            </Link>
        </div>
    )
}

export const CartItemsContainer = () => {

    const { cart, calcTotal } = useCart()
    let total = calcTotal()

    const [cartState, setCartState] = useState(cart)

    return (
        <div className="cartItemsContainer">
            {cart.map(i => <CartItem key={i.name} {...i} setCartState={setCartState} />)}
            <div className="total">
                <h2>Precio total: ${total} </h2>
            </div>
        </div>
    )
}

const Cart = () => {

    const { cart } = useCart()

    const [empty, setEmpty] = useState(true)

    useEffect(() => {
        if (cart.length !== 0) {
            setEmpty(false)
        }
    })

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
            <CartItemsContainer />
            <CartBtns />
        </>
        }
        </>
    )
}

export default Cart