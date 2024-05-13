import '../Styles/Cart.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from '../Store/cartSlice';

const Cart = () => {

  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.cart)
  const [total, setTotal] = useState(0);

  const removeCart = (id) => {
    //dispatching removeProduct action
    dispatch(removeProduct(id));
  }

  useEffect(() => {
    setTotal(cartProducts.reduce((accu, curr) => accu + parseInt(curr.price), 0))
  }, [cartProducts])

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {
          cartProducts.map((product) => (
            <div className="cart-product" key={product.id}>
              <div className="img">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="cart-product-details">
                <h3>Model: {product.title}</h3>
                <p>Price: ${product.price}</p>
              </div>
              <div className='btn'>
                <button onClick={() => removeCart(product.id)}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
      <h2 className="total">Total Amount: ${total}</h2>
    </>
  )
}

export default Cart