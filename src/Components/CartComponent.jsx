import React from 'react';

const CartComponent = ({ cartProducts }) => {
 // console.log(cartProducts,"cartProducts")
  // return <h2 data-testid="empty-text">The cart is empty!</h2>;

  return (
    <div data-testid="cart-container">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>Units</th>
          </tr>
        </thead>
        {/* <tbody data-testid="cart-body">
          <tr>
            <td>adsjsdhahk</td>
          </tr>
        </tbody>
      </table>
    </div> */}
        <tbody data-testid="cart-body">
          {cartProducts.map((cartProduct) => (
            <tr>
              <td>{cartProduct.id}</td>
              <td>{cartProduct.name}</td>
              <td>{cartProduct.price}</td>
              <td>Total</td>
              <td data-testid="total-price"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CartComponent;
