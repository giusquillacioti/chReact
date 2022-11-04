import { useState } from "react";
import { useCart } from "../context/CartContext";


const Counter = ({ detail }) => {

    const [counter, setCounter] = useState(1)

    const { cart, add } = useCart()

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
        add(detail.name, counter, detail.price, detail.image)
        console.log(`added ${counter} ${detail.name} to cart`);
    }

    return (
        <div className="addBtn">
            <button className="addtoCart" onClick={addToCart}>Agregar al carrito</button>
            <div className="quantity">
                <button onClick={removeOne}>-</button>
                <p>{counter}</p>
                <button onClick={addOne}>+</button>
            </div>
        </div>
    )
}
export default Counter