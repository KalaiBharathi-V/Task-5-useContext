import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import productData from './productData';


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    const existingIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setTotalQuantity(totalQuantity + 1);
    setTotalAmount(totalAmount + product.price);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    const removedItem = cartItems.find(item => item.id === id);
    setCartItems(updatedCartItems);
    setTotalQuantity(totalQuantity - removedItem.quantity);
    setTotalAmount(totalAmount - (removedItem.price * removedItem.quantity));
  };

  const updateQuantity = (id, quantity) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(updatedItems);
    setTotalQuantity(updatedItems.reduce((acc, item) => acc + item.quantity, 0));
    setTotalAmount(updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0));
  };

  return (
    <div className="container">
      <h1>Shopping App</h1>
      <div className="product">
        {}
        {productData.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {}
      <Cart
        cartItems={cartItems}
        totalQuantity={totalQuantity}
        totalAmount={totalAmount}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default App;
