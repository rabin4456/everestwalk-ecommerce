import React from "react";
import img2 from "../Images/fantechHeadset.jpg";
import { MdDelete } from "react-icons/md";
import { updateCartItems, removeCartProduct } from "../actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
const CartItem = (props) => {
  const { product, quantity } = props.products;
  const nepaliPrice = product.price && product.price.split("$")[1] * 120.88;
  // const { carts } = useSelector((state) => state.ProdcutReducer);
  console.log("products", product);
  const dispatch = useDispatch();
  const addCartItem = (data) => {
    if (product.stock > 0) {
      dispatch(
        updateCartItems({
          product: {
            ...product,
            stock: product.stock - 1,
          },

          quantity: quantity + 1,
        })
      );
    } else {
      alert("Product is out of stock");
    }
  };
  const subCartItem = () => {
    console.log("stock", product.stock, product.stock + 1);
    if (quantity > 1) {
      dispatch(
        updateCartItems({
          product: { ...product, stock: product.stock + 1 },
          quantity: quantity - 1,
        })
      );
    } else {
      alert("Product Quantity cannot be zero");
    }
  };
  const deleteHander = () => {
    dispatch(
      removeCartProduct({
        product: { ...product, stock: product.stock + quantity },
      })
    );
  };

  return (
    <div className="cart_product">
      <div>
        <img
          src={`https://electronic-ecommerce.herokuapp.com/${product.image}`}
          alt=""
        />
      </div>
      <div>
        <h4>{product.name} </h4>
        <h6>Rs {nepaliPrice}</h6>
        <div className="displayFlex">
          <div>
            <p>
              <span className="cart_product_qty" onClick={() => subCartItem()}>
                -
              </span>{" "}
              <strong>{quantity}</strong>
              <span className="cart_product_qty" onClick={() => addCartItem()}>
                +
              </span>
            </p>
          </div>
          <div>
            <MdDelete className="delete_icon" onClick={() => deleteHander()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
