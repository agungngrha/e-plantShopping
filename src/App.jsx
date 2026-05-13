import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />

        <h1>Paradise Nursery</h1>

        <Link to="/plants">
          <button>Get Started</button>
        </Link>

        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;