import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-16 w-full bg-blue-500 flex justify-around items-center">
      <div className="text-white font-semibold text-2xl">
        <Link to="/">
          <h1>ShopKart.</h1>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8 text-white">
        <p>Products</p>

        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/cart">
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
