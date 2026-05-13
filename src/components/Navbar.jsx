import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="container">
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}

export default Navbar;