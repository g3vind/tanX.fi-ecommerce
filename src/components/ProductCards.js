import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductCard = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      const data = await response.json();
      setProductsData(data);
    } catch (error) {
      console.log("Error in fetching data from API", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 m-6 py-4 my-4">
      {productsData.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
