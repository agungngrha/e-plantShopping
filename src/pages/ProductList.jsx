import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Navbar from '../components/Navbar';
import './ProductList.css';
 // Perhatikan ekstensi .webP sesuai gambar

// Pastikan strukturnya bersih seperti ini
const plantsArray = [
    {
        category: "Air Purifying",
        plants: [
            { 
                id: 1, 
                name: "Snake Plant", 
                price: 15, 
                image: "/snake-plant.jpg", // Jalur ini langsung mengambil dari folder public
                description: "Pembersih udara alami." 
            },
            { 
                id: 2, 
                name: "Spider Plant", 
                price: 12, 
                image: "/spider-plant.webp", // Pastikan ekstensi .webp sesuai
                description: "Sangat mudah dirawat." 
            }
        ]
    },
    {
        category: "Aromatic",
        plants: [
            { 
                id: 3, 
                name: "Lavender", 
                price: 18, 
                image: "/lavender.jpg", 
                description: "Aroma yang menenangkan." 
            },
            { 
                id: 4, 
                name: "Rosemary", 
                price: 10, 
                image: "/rosemary.jpg", 
                description: "Tanaman herbal wangi." 
            }
        ]
    }
];
function ProductList() {
    const dispatch = useDispatch();
    const [addedItems, setAddedItems] = useState({});

    const handleAddToCart = (plant) => {
        dispatch(addItem({ ...plant, cost: `$${plant.price}` }));
        setAddedItems(prev => ({ ...prev, [plant.id]: true }));
    };

    return (
        <div className="product-page">
            <Navbar />
            <div className="product-listing-container">
                {plantsArray.map((category) => (
                    <div key={category.category} className="category-section">
                        <h2 className="category-title">{category.category}</h2>
                        <div className="product-grid">
                            {category.plants.map((plant) => (
                                <div className="product-card" key={plant.id}>
                                    <img src={plant.image} alt={plant.name} className="product-image" />
                                    <h3 className="product-name">{plant.name}</h3>
                                    <p className="product-price">${plant.price}</p>
                                    <button 
                                        className="add-to-cart-btn"
                                        disabled={addedItems[plant.id]} 
                                        onClick={() => handleAddToCart(plant)}
                                    >
                                        {addedItems[plant.id] ? "Added" : "Add to Cart"}
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