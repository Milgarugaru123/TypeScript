"use client";

import { useState } from "react";

type CartItemProps = {
  name: string;
  img: string;
  price: string;
  count: number;
};

const CartItem = ({
  name = `아이템`,
  img = `!`,
  price,
  count = 1,
}: Partial<CartItemProps>) => {
  const [cnt, setCnt] = useState(count);

  const changeNum = (exp: number) => {
    setCnt((prev) => (prev + exp < 0 ? 0 : prev + exp));
  };

  return (
    <article className={`flex justify-between border-b border-slate-300 py-3`}>
      <div className={`flex gap-2 items-center`}>
        <div>이모지</div>
        <div className={`flex flex-col items-start gap-1`}>
          <div>아이템 이름</div>
          <div className={`flex gap-1`}>
            <button
              className={`px-1 border border-slate-200 rounded-lg`}
              onClick={() => {
                changeNum(-1);
              }}
            >
              －
            </button>
            <span className={`text-slate-400 px-3`}>{cnt}개</span>
            <button
              className={`px-1 border border-slate-200 rounded-lg`}
              onClick={() => {
                changeNum(1);
              }}
            >
              ＋
            </button>
          </div>
        </div>
      </div>
      <div className={`flex flex-col items-end`}>
        <div className={`text-slate-400 pl-1 py-1 cursor-pointer`}>삭제</div>
        <div>{cnt * 3000}원</div>
      </div>
    </article>
  );
};

export default CartItem;
