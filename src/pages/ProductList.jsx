import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';
import Navbar from '../components/Navbar';

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    
    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { id: 1, name: "Snake Plant", price: 15, image: "/snake-plant.jpg", description: "Pembersih udara alami." },
                { id: 2, name: "Spider Plant", price: 12, image: "/spider-plant.webp", description: "Sangat mudah dirawat." },
                { id: 3, name: "Peace Lily", price: 20, image: "https://images.pexels.com/photos/4505171/pexels-photo-4505171.jpeg", description: "Bunga putih yang elegan." }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                { id: 4, name: "Lavender", price: 18, image: "/lavender.jpg", description: "Aroma yang menenangkan." },
                { id: 5, name: "Rosemary", price: 10, image: "/rosemary.jpg", description: "Tanaman herbal wangi." },
                { id: 6, name: "Mint", price: 8, image: "https://images.pexels.com/photos/1084545/pexels-photo-1084545.jpeg", description: "Segar dan serbaguna." }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            <Navbar />
            <div className="product-listing-container">
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h2 className="category-title">{category.category}</h2>
                        <div className="product-grid">
                            {category.plants.map((plant) => (
                                <div className="product-card" key={plant.id}>
                                    <img src={plant.image} alt={plant.name} className="product-image" />
                                    <h3 className="product-name">{plant.name}</h3>
                                    <p className="product-price">${plant.price}</p>
                                    <button 
                                        className="add-to-cart-btn"
                                        disabled={cartItems.some(item => item.id === plant.id)}
                                        onClick={() => handleAddToCart(plant)}
                                    >
                                        {cartItems.some(item => item.id === plant.id) ? "Added" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;