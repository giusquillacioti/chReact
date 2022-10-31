const CartItem = ({ name, quantity, price, image }) => {
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
            <h4 className="itemTotal">${price*quantity}</h4>
        </div>
    )
}
export default CartItem