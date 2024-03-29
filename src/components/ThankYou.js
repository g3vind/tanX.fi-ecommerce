import React from "react";

const ThankYou = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-green-check-mark-png-image_6525691.png"
        alt="thank you"
        className="h-96 w-auto"
      />
      <h1 className="text-xl text-black font-bold">
        Order Placed Successfully!
      </h1>
      <h3>It will delivered in 3 days</h3>
    </div>
  );
};

export default ThankYou;
