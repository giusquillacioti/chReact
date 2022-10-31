import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemCounter from "./ItemCounter"

const ItemDetailContainer = () => {

    const { id: itemId } = useParams()

    const [detail, setDetail] = useState({})

    useEffect(() => {
        getDetail()
    }, [])


    const getDetail = async () => {
        const response = await fetch('../data.json')
        const data = await response.json()
        const itemDetail = data.find(i => i.id == itemId)
        //console.log(itemDetail)
        setDetail(itemDetail)
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
                </div>

                <ItemCounter detail={detail} />
            </div>
        </div>
    )
}
export default ItemDetailContainer