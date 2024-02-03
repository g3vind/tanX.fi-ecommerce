import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const cartItems = useSelector((state) => state.cart.cart);
  const favItems = useSelector((state) => state.favorite.favorites);

  return (
    <div className="h-16 w-full bg-blue-500 flex justify-around items-center">
      <div className="text-white font-semibold text-2xl">
        <Link to="/">
          <h1>ShopKart.</h1>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8 text-white">
        <Link to="/">
          <p className="border-2 border-gray-200 p-2 rounded-md">Products</p>
        </Link>
        {/* if user is authenticated show logout else show login button */}

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
        {isAuthenticated ? (
          <button
            className="border-2 border-gray-200 p-2 rounded-md"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
        <p className="text-red-500 font-bold text-xs">
          {isAuthenticated && (
            <div className="flex flex-col justify-center items-center cursor-pointer">
              <img
                src={user.picture}
                alt={user.name}
                className="h-8 w-8 rounded-full"
              />
              <h2>{user.name}</h2>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default Header;
