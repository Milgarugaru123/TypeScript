"use client";

import Link from "next/link";
import { CartItem } from "./Item";
import { useEffect, useState } from "react";

const Header = () => {
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    const read = () => {
      const cart = window.localStorage.getItem(`cart`);
      const data: CartItem[] = cart ? JSON.parse(cart) : [];
      setTotal((prev) => data.reduce((x, y) => x + y.count, 0));
    };
    read();
    window.addEventListener(`cart-change`, read);
    return () => window.removeEventListener(`cart-change`, read);
  }, []);

  return (
    <header className={`py-2 border border-b-slate-300`}>
      <nav className={`w-full max-w-5xl mx-auto flex justify-between`}>
        <Link href={`/`} className={`text-xl font-bold`}>
          모아 마켓
        </Link>
        <Link href={`/cart`}>{total} 장바구니</Link>
      </nav>
    </header>
  );
};

export default Header;
