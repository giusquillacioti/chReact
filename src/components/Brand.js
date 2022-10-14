import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const Brand = () => {
    return (
        <div className="logo">
            <Link to="/">
            <figure>
                <img src={logo} alt="modo.lola"/>
            </figure>
            </Link>
        </div>
    )
}
export default Brand