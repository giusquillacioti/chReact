import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemCounter from "./ItemCounter"
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {

    const { id: itemId } = useParams()

    const [detail, setDetail] = useState({})

    useEffect(() => {
        getDetail()
    }, [])

    const getDetail = () => {
        const database = getFirestore()
        const products = collection(database, 'products')
        getDocs(products).then(snapshot => {
            const data = snapshot.docs.map(e => ({ id: e.id, ...e.data() }))
            const itemDetail = data.find(i => i.id == itemId)
            setDetail(itemDetail)
        })
    }

    return (
        <div className="productDetail">
            <figure>
                <img src={detail.image} alt={detail.name} height="300" width="300" />
            </figure>
            <div className="productDetailText">
                <h2>{detail.name}</h2>
                <h3>${detail.price}</h3>
                <div>
                    <p>{detail.description} </p>
                    <h4>{detail.size}ml</h4>
                    {detail.stock > 15 ?
                        '' : <p>¡Sólo quedan {detail.stock} unidades disponibles!</p>
                    }
                </div>

                <ItemCounter detail={detail} />
            </div>
        </div>
    )
}
export default ItemDetailContainer