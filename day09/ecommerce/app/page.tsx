"use client";

import { products } from "@/data/items";
import Item from "@/src/Item";
import Title from "@/src/Title";

const Home = () => {
  return (
    <>
      <Title title={`마켓`} />
      <section className={`grid grid-cols-5 gap-4`}>
        {products.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};

export default Home;
