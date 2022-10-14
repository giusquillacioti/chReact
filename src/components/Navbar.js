import { Link } from 'react-router-dom';
import CartWidget from '../components/CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar black">
            <ul>
                <Link to="/category/olaplex"><li>Olaplex</li></Link>
                <Link to="/category/schwarzkopf"><li>Schwarzkopf</li></Link>
                <Link to="/category/alfaparf"><li>Alfaparf</li></Link>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}
export default Navbar