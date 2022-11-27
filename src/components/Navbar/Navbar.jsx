import { Link, NavLink} from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.scss"

const links = ["House", "Techno", "Progressive House", "Tech House"];

export const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const {cart, getCartQty} = useCartContext();
  
  return (
    <header className="navbar">
        <Link to="/">
        <img
          src={
            "https://cdn.pixabay.com/photo/2016/03/31/21/19/black-1296338_960_720.png"
          }
          className="navbar__logo"
          alt="logo"
        />
        </Link>
      <div className="navbar__nav">
        {links.map((elemento) => {
          return (
            <NavLink
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
            to={`/category/${elemento.toLowerCase()}`}
            key={elemento}
          >
            {elemento}
          </NavLink>
          );
        })}
    </div>
    <Link to="/cart" className="navbar__cart">
    <AiOutlineShoppingCart/>{" "} 
    <span >{getCartQty()}</span>
    </Link>
    </header>
  );
};

