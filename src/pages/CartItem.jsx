import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import Navbar from '../components/Navbar';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const numericPrice = parseFloat(item.cost.replace('$', ''));
      return total + (numericPrice * item.quantity);
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  return (
    <div className="cart-container">
      <Navbar />
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <div className="cart-items-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Subtotal: ${parseFloat(item.cost.replace('$', '')) * item.quantity}</div>
              <button className="cart-item-delete" onClick={() => dispatch(removeItem(item.name))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-actions" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="get-started-button" onClick={onContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button" style={{ marginTop: '10px' }} onClick={() => alert('Coming Soon')}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;