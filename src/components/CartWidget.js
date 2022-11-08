import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {

    const { calcItems } = useCart()
    const [widgetCount, setWidgetCount] = useState(0)

    let itemCount = calcItems()

    useEffect(() => {
        setWidgetCount(itemCount)
    })

    return (
        <div className="widgetContainer">
            <FontAwesomeIcon icon={faCartShopping} />
            {widgetCount === 0 ? '' : <p>{widgetCount}</p>}
        </div>
    )
}
export default CartWidget