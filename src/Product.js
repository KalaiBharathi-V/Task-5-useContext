import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <button className="product-button" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
