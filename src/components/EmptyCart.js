import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
        alt="empty-cart-icon"
        className="h-[340px] mt-12 w-auto"
      />
      <Link to="/">
        <button className="w-40 h-12 rounded-xl text-white bg-blue-500 mt-20">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
