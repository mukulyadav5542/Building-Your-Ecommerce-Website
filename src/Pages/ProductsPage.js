import React from "react";
import { useParams } from "react-router-dom";
import ProductsArr from "../components/UI/ProductsArr";
import Header from "../components/UI/Header";

const ProductsPage = () => {
  const params = useParams();
  // it will return a object
  console.log(params.productId);

  const pDetails = ProductsArr.filter((ele) => {
    return ele.id === params.productId;
  });

  console.log(pDetails, "this is in product details single product");
  console.log(pDetails[0].title);

  return (
    <>
      <div className="flex bg-black h-10  text-[20px] text-white">
        <Header />
      </div>
      <div className="flex  w-[18.90rem] m-auto mt-[1rem] flex-col">
        <div>
          <img
            className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
            src={pDetails[0].imageUrl}
            alt=""
          />
        </div>
        <div className="flex justify-between">
          <div>{pDetails[0].title}</div>
          <div>{pDetails[0].price}</div>
        </div>
      </div>
      <div className="border text-center mt-[5rem] font-serif  text-[35px]">
        User Reviews
      </div>
      <p className="w-[50rem] m-auto mt-[2rem] font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quibusdam
        eius officiis dolorem nesciunt soluta accusamus voluptates nisi!
        Eveniet, odit sint. Sunt non ipsa nesciunt quod aliquam veniam error
        dolorum maiores, facere exercitationem ab eligendi, molestias maxime cum
        aliquid pariatur animi rem, nam sed quibusdam. Dolore minima hic rerum
        odit.
      </p>
    </>
  );
};

export default ProductsPage;
