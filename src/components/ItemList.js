import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "./Item"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemList = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getProductsCategory()
        } else {
            getProducts()
        }
    }, [id])

    const getProducts = () => {
        const database = getFirestore()
        const products = collection(database, 'products')
        getDocs(products).then(snapshot => {
            const data = snapshot.docs.map(e => ({ id: e.id, ...e.data() }))
            setProducts(data)
        })
    }

    const getProductsCategory = () => {
        const database = getFirestore()
        const products = collection(database, 'products')
        getDocs(products).then(snapshot => {
            const data = snapshot.docs.map(e => ({ id: e.id, ...e.data() }))
            setProducts(data.filter(item => item.category === id))
        })
    }

    return (
            <div className="cardsContainer">
                {products.map(p => <Item key={p.id} {...p} />)}
            </div>
    )
}
export default ItemList