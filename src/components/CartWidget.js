import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"

const CartWidget = () => {

    const { cart } = useCart()
    const [widgetCount, setWidgetCount] = useState(0)
    
    const calcItems = () => {
        let itemTotal = cart.map(item => item.quantity);
        const total = itemTotal.reduce((acc, currentValue) => acc + currentValue, 0);
        return total
    }
    let itemCount = calcItems()

    useEffect(() => {
        setWidgetCount(itemCount)
    })

    return (
        <div className="widgetContainer">
            <i className="material-icons">shopping_cart</i>
            {widgetCount === 0 ? '' : <p>{widgetCount}</p> }
        </div>
    )
}
export default CartWidget