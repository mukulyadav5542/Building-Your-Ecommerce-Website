import React from "react";
import { useParams } from "react-router-dom";
import ProductsArr from "../components/UI/ProductsArr";
import ReactImageMagnify from 'react-image-magnify';
import './ProductsPage.module.css'
// import Header from "../components/UI/Header";

const ProductsPage = () => {
  const params = useParams();
  // it will return a object
  console.log(params.productId,{params});

  const pDetails = ProductsArr.filter((ele) => {
    return ele.productId === params.productId;
  }) || [];


  return (
    <>
      {/* <div className="flex bg-black h-10  text-[20px] text-white">
        <Header />
      </div> */}

      <div className="App" width={400}>
        {/* <div id="#imageMagnifyer"> */}
          {/* <img
            className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
            src={pDetails[0]?.imageUrl}
            alt=""
          /> */}
          <ReactImageMagnify {...{
            smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                // isFluidWidth: true,
                src: pDetails[0]?.imageUrl,
                width:400,
                height:400,
            },
            largeImage: {
                src: pDetails[0]?.imageUrl,
                width: 1000,
                height: 800
            },
            isHintEnabled: true,
        }} />
        {/* </div> */}
        <div className="flex justify-between">
          <div>{pDetails[0]?.title}</div>
          <div>{pDetails[0]?.price}</div>
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
