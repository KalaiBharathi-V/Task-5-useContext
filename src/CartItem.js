import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-item">
      <h3 className="cart-item-title">{item.title}</h3>
      <p className="cart-item-price">${item.price}</p>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
        className="cart-item-quantity"
      />
      <button onClick={() => removeFromCart(item.id)} className="cart-item-remove">Remove</button>
    </div>
  );
};

export default CartItem;
