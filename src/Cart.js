import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, totalQuantity, totalAmount, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ))}
      <p className="cart-total">Total Quantity: {totalQuantity}</p>
      <p className="cart-total">Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default Cart;
