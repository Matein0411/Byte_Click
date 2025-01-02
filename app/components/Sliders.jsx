"use client";

import Link from "next/link";
import Slider from "react-slick";
import FavoriteButton from "./FavoriteButton";
import AuthContextProvider from "@/context/AuthContext";
import AddToCartButton from "./AddToCartButton";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      onClick={onClick}
      style={{
        right: "10px",
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        color: "white",
        cursor: "pointer",
      }}
    >
      ▶
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      onClick={onClick}
      style={{
        left: "10px",
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        color: "white",
        cursor: "pointer",
      }}
    >
      ◀
    </div>
  );
}

export default function FeaturedProductSlider({ featuredProducts }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="overflow-hidden relative">
      <Slider {...settings}>
        {featuredProducts?.map((product) => {
          return (
            <div key={product?.id}>
              <div className="flex flex-col-reverse md:flex-row gap-4 bg-[rgb(241,241,241)] p-5 md:px-24 md:py-20 w-full">
                <div className="flex-1 flex flex-col md:gap-10 gap-4">
                  <h2 className="text-gray-500 text-xs md:text-base">
                    NEW FASHION
                  </h2>
                  <div className="flex flex-col gap-4">
                    <Link href={`/products/${product?.id}`}>
                      <h1 className="md:text-4xl text-xl font-semibold">
                        {product?.title}
                      </h1>
                    </Link>
                    <h1 className="text-gray-600 md:text-sm text-xs max-w-96 line-clamp-2">
                      {product?.shortDescription}
                    </h1>
                  </div>
                  <AuthContextProvider>
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/checkout?type=buynow&productId=${product?.id}`}
                      >
                        <button className="bg-black text-white text-xs md:text-sm px-4 py-2.5 rounded-lg">
                          BUY NOW
                        </button>
                      </Link>
                      <AddToCartButton productId={product?.id} type={"large"} />
                      <FavoriteButton productId={product?.id} />
                    </div>
                  </AuthContextProvider>
                </div>
                <div className="">
                  <Link href={`/products/${product?.id}`}>
                    <img
                      className="h-[14rem] md:h-[23rem]"
                      src={product?.featureImageURL}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
