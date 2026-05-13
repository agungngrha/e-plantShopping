import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;