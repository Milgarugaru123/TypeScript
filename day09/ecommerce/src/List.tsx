"use client";

import Item, { TCartItem } from "./Item";

const List = () => {
  const cart = window.localStorage.getItem(`cart`);
  const data: TCartItem[] = cart ? JSON.parse(cart) : [];

  return (
    <section className={`w-2/3 grid grid-cols-3 gap-4`}>
      {data.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </section>
  );
};

export default List;
