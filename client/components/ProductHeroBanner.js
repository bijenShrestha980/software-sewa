import React from "react";

const ProductHeroBanner = ({ product }) => {
  return (
    <div>
      <div
        className="pt-20 pb-8 mb-12 bg-cover bg-no-repeat single-blog"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(60 130 246 / 67%) 0%,rgb(0 0 0 / 46%) 100%), url(${product.bannerImg})`,
          backgroundPosition: "50% 50%",
          height: "400px",
        }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl mt-4 text-white font-bold font-heading">
                {product.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeroBanner;
