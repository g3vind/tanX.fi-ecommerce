import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const favItems = useSelector((state) => state.favorite.favorites);
  console.log(favItems);
  return (
    <div className="h-16 w-full bg-blue-500 flex justify-around items-center">
      <div className="text-white font-semibold text-2xl">
        <Link to="/">
          <h1>ShopKart.</h1>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8 text-white">
        <Link to="/">
          <p>Products</p>
        </Link>

        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/favorites">
          <span className="flex items-center">
            <FaHeart color="black" />
            <span className="-mt-4 -mr-1 font-bold text-red-600">
              {favItems.length}
            </span>
          </span>
        </Link>
        <Link to="/cart">
          <span className="flex items-center">
            <FaCartShopping color="black" />{" "}
            <span className="-mt-4 -mr-1 font-bold text-red-600">
              ({cartItems.length})
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
