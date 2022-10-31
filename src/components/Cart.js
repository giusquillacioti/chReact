import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {

    const { cart, add } = useCart()

    const calcTotal = () => {

        let itemTotal = cart.map(item => item.price*item.quantity);

        const total = itemTotal.reduce((acc, currentValue) => acc + currentValue, 0);
        
        return total
    }

    let total = calcTotal()

    const empty = () => {
        cart.length = 0 
    }

    return (
        <>
        <div className="cartItemsContainer">
            {cart.map(i => <CartItem key={i.name} {...i} />)}
            <div className="total">
                <h2>Precio total: ${total} </h2>
            </div>
        </div>
        <div className="buyBtn">
            <button onClick={empty}>Vaciar carrito</button>
            <button>Finalizar compra</button>
        </div>
        </>
    )
}
export default Cart