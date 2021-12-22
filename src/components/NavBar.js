import React from "react";
import "../App.scss";
import CartDropdown from "./CartDropdown";
import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="nav_container">
        <div className="nav_items">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
              <span className="cart">
                <a href="#">
                  CART
                  <HiShoppingCart className="nav_icon" />
                </a>

                <CartDropdown />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
