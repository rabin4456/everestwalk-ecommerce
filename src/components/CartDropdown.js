import React from "react";
import { useDispatch, useSelector, useEffect } from "react-redux";
import { fetchProducts } from "../actions/actionCreator";
import CartItem from "./CartItem";
import HelperHook from "./helperHook";
import { useNavigate } from "react-router-dom";
const CartDropdown = (props) => {
  const { carts, visible } = useSelector((state) => state.ProductReducer);
  console.log("my carts", carts);
  const getTotalPrice = (data) => {
    return data.reduce(
      (val, el) => el.product.price.split("$")[1] * 120.88 * el.quantity + val,
      0
    );
  };
  const navigate = useNavigate();
  const { ref } = HelperHook(false);
  console.log("visible", visible);
  const checkoutHandler = () => {
    localStorage.setItem(
      "checkout",
      JSON.stringify({
        carts: carts,
        totalPrice: getTotalPrice(carts),
      })
    );
    navigate("/checkout");
  };
  return (
    <div
      ref={ref}
      className={
        visible ? "CartDropdown_container visible" : "CartDropdown_container"
      }
    >
      {/* <div className="cart_product title">
        <li>Product</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Total </li>
      </div> */}

      <div className="cartItem_container">
        {/* <CartItem /> */}
        {/* {name} */}
        {carts.length > 0 && carts.map((el) => <CartItem products={el} />)}
      </div>
      <div>
        <h6>
          toatl Amount:- Rs {carts.length > 0 ? getTotalPrice(carts) : "0"}
        </h6>
      </div>
      <div className="checkOutBtn_container">
        <button onClick={() => checkoutHandler()}>Check Out</button>
      </div>
    </div>
  );
};

export default CartDropdown;
