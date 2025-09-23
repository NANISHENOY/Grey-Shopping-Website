import React, { createContext, useState } from 'react';
import all_product from '../Components/Assest/Ecommerce_Frontend_Assets/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = { quantity: 0, size: "M" }; // default size M
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [products, setProducts] = useState();
  // Add item with size
  const addToCart = (itemId, size = "M") => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        quantity: prev[itemId].quantity + 1,
        size: size
      }
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: prev[itemId].quantity - 1
      }
    }));
  };


  const updateSize = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        size: size
      }
    }));
  };

  const updateCartQuantity = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: quantity > 0 ? quantity : 1 // prevent 0 or negative
      }
    }));
  };
  

  const contextValue = { all_product, cartItems,products , addToCart, removeFromCart, updateSize };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
