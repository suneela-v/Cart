import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CartComponent from './CartComponent';
import CartComponentTrial from './CartComponentTrial';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [initialcart, setInitialcart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`;
  const fetchProducts = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setProducts(result);
    setInitialcart(
      result.map((pro) => {
        return { ...pro, stock: 0 };
      }),
    );
  };

  const handleCart = (idhere) => {
    const productsarr = products.map((product) =>
      product.id === idhere ? { ...product, stock: product.stock - 1 } : product,
    );

    setProducts(productsarr);
    const updatedcart = initialcart?.map((product) => {
      if (product.id === idhere) {
       // console.log(product.stock);
        return { ...product, stock: product.stock + 1 };
      }
      return product;
    });

    setInitialcart(updatedcart);
    let filteredcart = updatedcart.filter((q) => q.stock > 0);

    setTotal(
      filteredcart
        .reduce((ac, cu) => {
          return cu.stock * cu.price + ac;
        }, 0)
        .toFixed(2),
    );

    setCartProducts(filteredcart);
   // console.log(updatedcart, 'updatedcart');
  };
  return (
    <div>
      {products.length === 0 ? (
        <button data-testid="get-btn" onClick={fetchProducts}>
          GetProducts
        </button>
      ) : (
        <div className="dashboard">
          <div>{<CartComponentTrial cartProducts={cartProducts} total={total} />}</div>
          <div
            data-testid="products-container"
            style={{ display: 'flex', border: '2px solid green', flexWrap: 'wrap' }}
          >
            {products.map((product) => (
              <ProductCard product={product} handleCart={handleCart} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

// http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}
