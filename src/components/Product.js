const Product = ({ product }) => {
  return (
    <div className="bg-white h-auto w-60 rounded-xl flex flex-col justify-center items-center">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="object-cover h-[150px] w-32"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-light m-2 text-center">{product?.title}</h3>
        <p className="m-4">₹{product?.amount}</p>
        <span className="h-7 text-center p-1 w-8 m-4 -mt-1 bg-green-500 text-white">
          {product?.rating}
        </span>
      </div>
    </div>
  );
};

export default Product;
