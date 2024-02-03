import { Trash } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cart);
  const handlePlaceOrder = (e) => {
    e.preventDefault();
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-5xl">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          My Cart ({cartItems.length})
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            {cartItems?.map((product) => (
              <div key={product.id} className="">
                <li className="flex py-6 sm:py-6 ">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">{product.title}</h3>
                        </div>

                        <div className="mt-1 flex items-end">
                          <p className="text-sm font-medium text-gray-900">
                            ₹&nbsp;{product.amount}
                          </p>
                          &nbsp;&nbsp;
                          <p className="text-sm font-medium text-green-500">
                            {product.discount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="mb-2 flex">
                  <div className="min-w-24 flex">
                    <button type="button" className="h-7 w-7">
                      -
                    </button>
                    <input
                      type="text"
                      className="mx-1 h-7 w-9 rounded-md border text-center"
                      defaultValue={1}
                    />
                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div className="ml-6 flex text-sm">
                    <button
                      type="button"
                      className="flex items-center space-x-1 px-2 py-1 pl-0"
                    >
                      <Trash size={12} className="text-red-500" />
                      <span className="text-xs font-medium text-red-500">
                        Remove
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price (3 item)</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ₹ 52,398
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">
                    - ₹ 3,431
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ₹ 48,967
                  </dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ 3,431 on this order
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="bg-blue-500 h-8 w-32 rounded-lg my-2"
            >
              Place Order
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}
