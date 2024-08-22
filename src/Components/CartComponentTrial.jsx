import React,{ useState } from "react"
const CartComponentTrial = ({ cartProducts, total }) => {
 // console.log(cartProducts, 'cartProductscomponent');
  return (
    <div data-testid="cart-container">
     
      {cartProducts.length>0 &&
      <>
      <h2>cart</h2>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Units</th>
            <th>Price</th>
          </tr>
        </thead>      
        <tbody data-testid="cart-body">
          {cartProducts.map((cartProduct) => (
            <tr>
              {' '}
              <td>{cartProduct.id}</td>
              <td>{cartProduct.name}</td>
              <td>{cartProduct.stock}</td>          
              <td data-testid="total-price">{(cartProduct.price * cartProduct.stock).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
       <h4>Total:{total}</h4>
       </>
}
    </div>
  );
};

export default CartComponentTrial;