import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"

const CartWidget = () => {

    const { cart, calcItems } = useCart()
    const [widgetCount, setWidgetCount] = useState(0)
    
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