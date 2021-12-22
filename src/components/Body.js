import React, { useEffect } from "react";
import "../App.scss";
import { FaFilter } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import Products from "./Products";
import FilterDropdown from "./FilterDropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/actionCreator";
const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const { loading, products } = useSelector((state) => state.ProductReducer);
  // console.log("fetchState", fetchState);

  return (
    <div className="body_main_container">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <div className="body_categoryList">
            <div>
              <ul>
                <li>All</li>
                <li>laptop</li>
                <li>keybord</li>
                <li>Headset</li>
                <li>mobile</li>
                <li>watch</li>
              </ul>
            </div>

            <div>
              <div className="body_filterIcons_container">
                <span>
                  <FilterDropdown />
                </span>
                <div className="body_filterIcons">
                  <h4>
                    <FaFilter />
                    Filter
                  </h4>
                  <AiFillCaretDown className="body_dropdown_icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="body_product_container">
            <div className="body_products">
              {products &&
                products.map((product) => (
                  <Products key={product.id} data={product} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
