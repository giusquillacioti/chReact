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

    return (
        <div className="cartItemsContainer">
            {cart.map(i => <CartItem key={i.name} {...i} />)}
            <div className="total">
                <h2>Precio total: ${total} </h2>
            </div>
        </div>
    )
}

const Cart = () => {

    const { cart } = useCart()

    return (
        <>
            {!cart.length ?
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