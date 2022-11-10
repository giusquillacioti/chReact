import { useLocation } from "react-router-dom"
import Swal from "sweetalert2"
import { useCart } from "../context/CartContext"

const CartItem = ({ id, name, quantity, price, image }) => {

    const { remove } = useCart()

    const location = useLocation()
    const isCheckout = location.pathname === '/checkout'

    const removeFromCart = () => {
        remove(id)

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

    return (
        <div className="cartItem">
            <div>
                <img src={image} alt={name} height="100" width="100" />
                <div className="info">
                    <h3>{name}</h3>
                    <h4>Cantidad: {quantity}</h4>
                    <h4>Precio unitario: ${price}</h4>
                </div>
            </div>
            <h4 className="itemTotal">${price * quantity}</h4>
            { !isCheckout && <button onClick={removeFromCart}>X</button> }
        </div>
    )
}
export default CartItem