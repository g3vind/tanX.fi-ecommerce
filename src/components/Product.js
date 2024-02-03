import React, { useState } from "react";
import { IoHeartOutline, IoHeartSharp, IoCartOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ product }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const handleAddedToCart = () => {
    setAddedToCart(!addedToCart);
  };

  return (
    <div className="bg-white h-auto w-60 flex flex-col justify-center items-center">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="object-cover h-[130px] w-32"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-light m-2 text-center">{product?.title}</h3>
        <p className="m-4">₹{product?.amount}</p>
        <span className="h-7 text-center p-1 w-8 m-4 -mt-1 bg-green-500 text-white">
          {product?.rating}
        </span>
      </div>

      <div className="flex gap-16">
        <div>
          <button onClick={handleFavourite}>
            {isFavourite ? <IoHeartSharp /> : <IoHeartOutline />}
          </button>
        </div>
        <div>
          <button onClick={handleAddedToCart}>
            {addedToCart ? <FaShoppingCart /> : <IoCartOutline />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
