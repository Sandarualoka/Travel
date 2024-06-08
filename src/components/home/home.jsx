import React from "react";
import Hero from "../hero/hero";
import ItemsCards from "../items_cards/items_cards";
import Products from "../products/products";

const home = () => {
  return (
    <>
      <Hero />
      <section className="my-8">
        <ItemsCards />
      </section>
      <section className="my-8">
        <Products />
      </section>
    </>
  );
};

export default home;
