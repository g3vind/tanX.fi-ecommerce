import React from "react";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const favItems = useSelector((state) => state.favorite.favorites);

  return (
    <>
      <h1 className="text-center text-3xl text-red-500 font-bold mt-2">
        Favorite Items ({favItems?.length})
      </h1>
      <div className="mt-10 m-5 flex flex-wrap">
        {favItems.map((favItem) => (
          <div
            key={favItem.id}
            className="bg-gray-200 h-auto w-60 flex flex-row flex-wrap justify-center items-center m-3"
          >
            <div>
              <img
                src={favItem.image}
                alt={favItem.title}
                className="object-fill h-[130px] w-32"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-light m-2 text-center">{favItem.title}</h3>
              <p className="m-4 text-center">₹{favItem.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FavoritesPage;
