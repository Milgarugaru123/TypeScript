"use client";

import { useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "@/utils/hooks";

type sortOption = `name` | `low` | `high`;

const List = () => {
  const { total } = useCart();

  const [option, setOption] = useState<sortOption>();

  return (
    <section>
      <div>
        <select
          name=""
          id=""
          className={`bg-black`}
          onChange={(e) => {
            setOption((prev) => e.target.value as sortOption);
          }}
        >
          <option value="name">가나다순</option>
          <option value="low">낮은 가격순</option>
          <option value="high">높은 가격순</option>
        </select>
      </div>
      {total
        .sort((a, b) => {
          if (option == `name`) return a.name > b.name ? 1 : -1;
          else if (option == `low`) return a.price > b.price ? 1 : -1;
          else return a.price < b.price ? 1 : -1;
        })
        .map((v) => (
          <CartItem key={v.id} {...v} />
        ))}
    </section>
  );
};

export default List;
