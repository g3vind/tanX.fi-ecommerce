import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8080/products/${id}`);
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetail();
  }, [id]);
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
              style={{ marginLeft: "330px" }}
            >
              {isFavourite ? <IoHeartSharp /> : <IoHeartOutline />}
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
              <button className="h-10 w-40 border-2 border-black text-black bg-white">
                Buy Now
              </button>

              <button className="bg-black text-white h-10 w-40">
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
