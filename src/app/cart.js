import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context for the cart
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function removeFromCart(index) {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  }

  function clearCart(){
    setCartItems([]);
  }

  const addToCart = (product, color, size, colorName) => {
    setCartItems([...cartItems, { product, color, size, colorName }]);
  };

  const stringifyCart = () => {
    let cartString = ""; // Use 'let' since we're reassigning
    let index=0;
    cartItems.forEach((item) => {
      if (item.product.sizes[0] !== "N/A" && item.product.sizes[0] !== "One size fits all") {
        cartString += item.size
      }
      cartString += " "
      if (item.product.colors[0] !== "N/A") {
        cartString += item.colorName
      }
      cartString += " "
      cartString += item.product.name;
      if (index!=cartItems.length-1) {
        cartString += `, `;
      }
      index++;
    });
    return cartString; // Return the cartString
  }

  const checkout = async () => {
    try {
      const totalCost = cartItems.reduce((total, item) => total + item.product.price, 0);
      const items=stringifyCart()
      const response = await axios.post('/api',{cartItems: items, totalCost: totalCost},
        { headers: {'Content-Type': 'application/json'}}, {method: 'POST'},
        { withCredentials: true });
        /*const response = await fetch('/api', { method: 'POST', headers: {
            'Content-Type': 'application/json'}, credentials: 'include',
          body: JSON.stringify({ cartItems: items, totalCost: totalCost })
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("response: ");
        console.log(response.json);
        const { url } = await response.json();
        window.location.href = url;*/
      window.location.href = response.data.url;
    } catch (error) {
      console.error("error in cart async: ", error);
      alert('Something went wrong during checkout');
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, addToCart, clearCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
};