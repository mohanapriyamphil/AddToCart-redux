import "../Styles/Product.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../Store/cartSlice";


const Product = ({ product }) => {
  const dispatch = useDispatch()

  const cartProducts = useSelector(state => state.cart)

  const description =
    product.description.length > 31
      ? product.description.substring(0, 30) + "..."
      : product.description;

  const addCart = (product) => {
    //dispatching addProduct action
    dispatch(addProduct(product));
  }

  const removeCart = (id) => {
    //dispatching removeProduct action
    dispatch(removeProduct(id));
  }

  return (
    <div>
      <div className="product" key={product.id}>
        <div className="img">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="details">
          <h3>
            <strong>Model: </strong>
            {product.title}
          </h3>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <p>
            <strong>Price: </strong>${product.price}
          </p>
          <div className='btn'>
                {
                    cartProducts.includes(product)? (
                        <button className="removeCart" onClick={() => removeCart(product.id)}>Remove from Cart</button>
                    ) : (
                        <button onClick={() => addCart(product)}>Add to Cart</button>
                    )
                }
            </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
