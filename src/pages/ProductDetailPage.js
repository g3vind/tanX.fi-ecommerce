import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { addToFavorite } from "../features/favoriteSlice";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const { isAuthenticated } = useAuth0();

  const handleFavourite = () => {
    if (!isAuthenticated) {
      // User is not authenticated, show alert or redirect to login page
      alert("Please log in to add to favorites");

      return;
    }
    dispatch(
      addToFavorite({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        amount: productDetail?.amount,
      })
    );
    setIsFavourite(true);
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `https://tanxfi-data.onrender.com/products/${id}`
        );
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      // User is not authenticated, show alert or redirect to login page
      alert("Please log in to add to favorites");

      return;
    }
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        amount: productDetail?.amount,
        rating: productDetail?.rating,
      })
    );
  };
  const handleBuyNow = () => {
    if (!isAuthenticated) {
      // User is not authenticated, show alert or redirect to login page
      alert("Please log in to add to favorites");

      return;
    }
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        amount: productDetail?.amount,
        rating: productDetail?.rating,
      })
    );
  };
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-contain lg:h-96 lg:w-1/2"
            src={productDetail?.image}
          />

          <div className="w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <button
              onClick={handleFavourite}
              className=""
              style={{
                marginLeft: "200px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Add to Favorites
              <span className="flex items-center ml-1">
                {isFavourite ? <IoHeartSharp /> : <IoHeartOutline />}
              </span>
            </button>

            <h1 className="my-4 text-3xl font-semibold text-black">
              {productDetail?.title}
            </h1>

            <p className="leading-relaxed">{productDetail?.description}</p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-2xl font-semibold">
                  ₹ {productDetail?.amount}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Link to="/cart">
                <button
                  onClick={handleBuyNow}
                  className="h-10 w-40 border-2 border-black text-black bg-white"
                >
                  Buy Now
                </button>
              </Link>

              <button
                onClick={handleAddToCart}
                className="bg-black text-white h-10 w-40"
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
