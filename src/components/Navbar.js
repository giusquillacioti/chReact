import CartWidget from '../components/CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar black">
            <ul>
                <li>Olaplex</li>
                <li>Schwarzkopf</li>
                <li>Alfaparf</li>
                <li><CartWidget /></li>
            </ul>            
        </nav>
    )
}
export default Navbar