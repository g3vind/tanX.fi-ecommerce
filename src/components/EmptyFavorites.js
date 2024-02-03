import React from "react";
import { Link } from "react-router-dom";

const EmptyFavorites = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl text-red-500 font-bold mt-4">
        No Favorite Items Currently
      </h2>
      <img
        src="https://static.thenounproject.com/png/152176-200.png"
        alt="empty-cart-icon"
        className="h-[340px] mt-8 w-auto"
      />
      <Link to="/">
        <button className="w-40 h-12 -ml-16 rounded-xl text-white bg-green-500 mt-20">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default EmptyFavorites;
