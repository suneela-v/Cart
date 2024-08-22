import React from 'react';

const ProductCard = ({product,handleCart}) => {
  // const handleCart =(id) =>{
     
  // }
  const {id,name,price,stock} =product
  return (
    <div data-testid="product-card" style={{ border: '1px solid red', width: '24%' }}>
      <h3 data-testid="name">Name :{name}</h3>
      <h5 data-testid="price">Price: {price}</h5>
      <p data-testid="quantity">Quantity: {stock}</p>
      {stock === 0 ? (
        <button data-testid="add-btn" onClick={null}>out of stock</button>
      ) : (
        <button data-testid="add-btn" onClick={()=>handleCart(id)}>add to cart</button>
      )}
      {/* <button data-testid="add-btn">{stock === 0 ? 'out of stock' : 'add to cart'}</button>
       */}
    </div>
  );
};

export default ProductCard;
