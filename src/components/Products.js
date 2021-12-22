import React from "react";
import "../App.scss";
import img from "../Images/fantechHeadset.jpg";
import { addToCart } from "../actions/actionCreator";
import { useDispatch } from "react-redux";
const Products = (props) => {
  const { name, price, image, stock, createDate, category } = props.data;
  const nepaliPrice = price && price.split("$")[1] * 120.88;
  console.log("nepali price", nepaliPrice);
  const dispatch = useDispatch();
  const addCartHandler = () => {
    const req = {
      product: {
        ...props.data,
        stock: stock - 1,
      },
    };
    dispatch(addToCart(req));
  };
  return (
    <div className="product_container">
      <div className="product_img">
        <img
          src={`https://electronic-ecommerce.herokuapp.com/${image}`}
          alt=""
          className="img"
        />
      </div>
      <div className="product_details">
        <p> {name}</p>
        <p>Rs {nepaliPrice.toFixed(2)}</p>
        <p>stock: {stock}</p>
        <p>created Date: {new Date(createDate).toLocaleDateString("en-US")}</p>
        <p>Category: {category.join(",")}</p>
        <div className="product_btn_contaoner">
          <p style={{ color: stock === 0 ? "red" : "green" }}>
            {" "}
            {stock === 0 ? "Out of Stock" : "stocked"}
          </p>
          <button
            className="product_btn"
            onClick={() => addCartHandler()}
            disabled={stock === 0}
          >
            {" "}
            ADD to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
