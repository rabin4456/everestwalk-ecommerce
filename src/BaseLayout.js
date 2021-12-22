import React from "react";
import NavBar from "./components/NavBar";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default BaseLayout;
