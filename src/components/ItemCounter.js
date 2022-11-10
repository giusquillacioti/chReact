import { useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../context/CartContext";


const Counter = ({ detail }) => {

    const [counter, setCounter] = useState(1)

    const { add } = useCart()

    const addOne = () => {
        if (counter < detail.stock) {
            setCounter(counter + 1)
        }
    }

    const removeOne = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const addToCart = () => {
        add(detail.id, detail.name, counter, detail.price, detail.image, detail.stock)

        Swal.fire({
            text: `Se agregó ${detail.name} al carrito.`,
            icon: 'success',
            toast: true,
            position: 'bottom-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })
    }

    return (
        <div className="addBtn">
            <button className="addtoCart" onClick={addToCart}>Agregar al carrito</button>
            <div className="quantity">
                { counter > 1 && <button onClick={removeOne}>-</button> }
                <p>{counter}</p>
                { counter !== detail.stock && <button onClick={addOne}>+</button> }
            </div>
        </div>
    )
}
export default Counter