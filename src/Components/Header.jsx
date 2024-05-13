import { Link } from "react-router-dom"
import '../Styles/Header.css';
import { useSelector } from "react-redux";


const Header = () => {
  const cartProducts = useSelector(state => state.cart)

  return (
    <div className="navbar">
        <div className="logo">Mobile Shoppy</div>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/cart'}>ViewCart {cartProducts.length}</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header