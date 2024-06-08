import React from "react";
import Devider from "../../assets/Frame 1 11.png";
import { useInView } from "react-intersection-observer";
import Product1 from "../../assets/product1.png";
import Product2 from "../../assets/product2.png";
import Product3 from "../../assets/product3.png";
import Product4 from "../../assets/product4.png";
import Product5 from "../../assets/product5.png";
import Product6 from "../../assets/product6.png";
import Product7 from "../../assets/product7.png";
import Product8 from "../../assets/product8.png";

const productItems = [
  {
    id: 1,
    name: "Art & Crafts",
    description: "description",
    price: "5,000 LKR",
    button: "Purchase",
    img: Product1,
  },
  {
    id: 2,
    name: "Gem & Jewellery",
    description: "description",
    price: "7,000 LKR",
    button: "Purchase",
    img: Product2,
  },
  {
    id: 3,
    name: "Food & Beverages",
    description: "description",
    price: "8,000 LKR",
    button: "Purchase",
    img: Product3,
  },
  {
    id: 4,
    name: "Toys & Games",
    description: "description",
    price: "5,000 LKR",
    button: "Purchase",
    img: Product4,
  },
  {
    id: 5,
    name: "Home Decor",
    description: "description",
    price: "7,000 LKR",
    button: "Purchase",
    img: Product5,
  },
  {
    id: 6,
    name: "Fashion & Clothing",
    description: "description",
    price: "8,000 LKR",
    button: "Purchase",
    img: Product6,
  },
  {
    id: 7,
    name: "Electronics",
    description: "description",
    price: "8,000 LKR",
    button: "Purchase",
    img: Product7,
  },
  {
    id: 8,
    name: "Books & Stationery",
    description: "description",
    price: "8,000 LKR",
    button: "Purchase",
    img: Product8,
  },
];

const Products = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <div className="p-4">
      <div className="flex justify-center mt-8">
        <img
          src={Devider}
          alt="header-image"
          className="w-full max-w-[300px] h-[40px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px]"
        />
      </div>

      <div className="mt-8">
        <p
          ref={ref}
          className={`${
            inView ? "animate__animated animate__fadeInUpBig" : ""
          } flex justify-center text-[24px] sm:text-[30px] md:text-[36px] lg:text-[46px] font-bold`}
        >
          FEATURED PRODUCTS
        </p>
      </div>
      <div className="mt-10">
        {/* Section for cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-8">
          {productItems.map((card) => (
            <div
              key={card.id}
              className="bg-black shadow-md rounded-[30px] overflow-hidden w-full flex flex-col items-center"
            >
              <img
                src={card.img}
                alt={card.name}
                className="w-full h-[140px] sm:h-[140px] md:h-[200px] object-cover"
              />
              <div className="flex flex-col items-center justify-between w-full p-4">
                <div>
                  <p className="text-white font-bold text-[14px]">
                    {card.name}
                  </p>
                  <p className="text-white font-bold text-[18px] sm:text-[21px]">
                    {card.price}
                  </p>
                </div>
                <div className="mt-4">
                  <button className="bg-white p-2 rounded-[32px] font-bold">
                    {card.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
