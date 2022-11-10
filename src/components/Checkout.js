import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { useCart } from "../context/CartContext"
import BuyerForm from "./BuyerForm"
import { CartItemsContainer } from "./Cart"

const Checkout = () => {

    const [buyer, setBuyer] = useState({})

    const { cart, calcTotal, updateStock, emptyCart } = useCart()

    const navigate = useNavigate()

    const order = () => {

        let total = calcTotal()

        let order = {
            buyer: buyer,
            items: cart.map(item => ({ id: item.id, name: item.name, quantity: item.quantity, price: item.price })),
            date: Date().toLocaleString(),
            total: total
        }

        const database = getFirestore();
        const ordersCollection = collection(database, 'orders');
        addDoc(ordersCollection, order).then(({ id }) => {

            Swal.fire({
                title: `¡Gracias por realizar tu compra!
    
                El identificador de tu orden es ${id}.
    
                Podés pasar a buscar tus productos por nuestro local de Martes a Sábados de 10 a 19hs.`,

                showConfirmButton: true,

                confirmButtonText: 'Finalizar'

                }).then(() => {
                    navigate('/')
                    emptyCart()
                })
        })

        updateStock()
    }



    return (
        <div className="checkoutContainer">

            <div>
                <CartItemsContainer />
                <div className="checkoutBtns">
                    <Link to="/cart">
                        <button>Modificar compra</button>
                    </Link>
                </div>
            </div>

            <div>
                <BuyerForm setBuyer={setBuyer} />
                <div className="checkoutBtns">
                    <button onClick={order}>Confirmar compra</button>
                </div>
            </div>
        </div>
    )
}
export default Checkout