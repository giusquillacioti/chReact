import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "./Item"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const {id}=useParams()

    useEffect(() => {
        if(id){
            getProductsCategory()
            }else{
            getProducts()
            }
    }, [id])

    const getProducts = async () => {
        const response = await fetch('../data.json')
        const data = await response.json()
        setProducts(data)
    }

    const getProductsCategory = async () => {
        const response = await fetch('../data.json')
        const data = await response.json()
        setProducts(data.filter(item=>item.category === id))
        console.log(data.filter(item=>item.category === id));
    }



    return (
        <>
            <div className="itemListContainer">
                <h1>{greeting}</h1>
            </div>
            <div className="cardsContainer">
                {products.map(p => <Item key={p.id} {...p} />)}
            </div>
        </>
    )
}
export default ItemListContainer