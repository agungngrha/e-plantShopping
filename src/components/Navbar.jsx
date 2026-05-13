import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Navbar.css';

function Navbar() {
  // Ambil state.cart.items sesuai struktur di CartSlice
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar-container">
      <div className="nav-logo">
        <Link to="/">Paradise Nursery</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-icon">
           Cart <span>({totalItems})</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;