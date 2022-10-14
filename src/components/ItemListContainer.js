import { useEffect, useState } from "react"
import Item from "./Item"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await fetch('data.json')
        const data = await response.json()
        setProducts(data)
    }

    return (
        <>
            <div className="itemListContainer">
                <h1>Bienvenido/a, {greeting}</h1>
            </div>
            <div className="cardsContainer">
                {products.map(p => <Item key={p.id} {...p} />)}
            </div>
        </>
    )
}
export default ItemListContainer