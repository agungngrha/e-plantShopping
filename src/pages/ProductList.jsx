import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=60" },
  { id: 2, name: "Snake Plant", price: 12, category: "Indoor", image: "https://images.unsplash.com/photo-1524594154905-9a6f2c5d3f5f?auto=format&fit=crop&w=800&q=60" },
  { id: 3, name: "Peace Lily", price: 15, category: "Flower", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60" },
  { id: 4, name: "Fern", price: 8, category: "Outdoor", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=61" },
  { id: 5, name: "Cactus", price: 7, category: "Succulent", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=62" },
  { id: 6, name: "Bonsai", price: 20, category: "Tree", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=63" }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plant List</h2>

      <div className="product-grid">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p className="price">${plant.price}</p>
            <p className="muted">{plant.category}</p>
            <div className="controls">
              <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;