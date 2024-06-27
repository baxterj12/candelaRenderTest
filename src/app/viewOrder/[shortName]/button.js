'use client'
import React, { useState } from 'react';
import './item.css';
import {  useCart } from './../../cart.js';

export default function Button({ product, selectedSize, clickedIndex}) {
    const { addToCart } = useCart();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const handleAddToCart = () => {
        addToCart(product, product.colors[clickedIndex], selectedSize, product.colorNames[clickedIndex]);
        setShowConfirmation(true);

        setTimeout(() => {
            setShowConfirmation(false);
        }, 1000);
      };

    return (
        <div className="buttonHolder">
            <button type="submit" className="button" onClick={showConfirmation ? null : handleAddToCart}
            style={{backgroundColor: showConfirmation ? 'white' : 'black', color: showConfirmation ? 'black' : 'white'}}>
                Add to Cart
            </button>
            {showConfirmation && <p className="confirmation">Item added to cart!</p>}
        </div>
    );
}