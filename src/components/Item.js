import { Link } from "react-router-dom"

const Item = ({ id, name, image, price }) => {
    return (
        <Link to={`/item/${id}`}>
            <div className="productCard" id={id}>
                <img src={image} alt={name} height="150" width="150" />
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div>
        </Link>
    )
}

export default Item