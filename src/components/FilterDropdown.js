import React from "react";
import "../App.scss";
import { filterProducts } from "../actions/actionCreator";
import { useSelector, useDispatch } from "react-redux";
const FilterDropdown = () => {
  const dispatch = useDispatch();
  const filterHandler = (data) => {
    dispatch(filterProducts(data));
  };
  return (
    <div className="filterDropdown_container">
      <a onClick={() => filterHandler("price_high_to_low")}>
        Price high to low
      </a>
      <a onClick={() => filterHandler("price_low_to_high")}>
        Price low to high
      </a>
    </div>
  );
};

export default FilterDropdown;
