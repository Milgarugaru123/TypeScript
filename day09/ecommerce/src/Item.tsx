export type ItemProps = {
  id: number;
  name: string;
  img?: string;
  price: number | string;
};

export type TCartItem = ItemProps & { count: number };

const Item = ({ id, name = ``, img, price = 0 }: ItemProps) => {
  const add = () => {
    if (id === null) return;
    const cart = window.localStorage.getItem(`cart`);
    const data: TCartItem[] = cart ? JSON.parse(cart) : [];
    const found = data.find((x) => x.id === id);
    if (found) {
      found.count += 1;
    } else {
      data.push({ id, name, img, price, count: 1 });
    }
    window.localStorage.setItem(`cart`, JSON.stringify(data));
    window.dispatchEvent(new Event(`cart-change`));
  };

  return (
    <article
      className={`w-full h-max border border-slate-100 rounded-lg p-3 flex flex-col gap-2`}
    >
      <div
        className={`text-4xl w-full aspect-square bg-violet-50 rounded-lg flex justify-center items-center`}
      >
        {img}
      </div>
      <div className={`font-bold`}>{name}</div>
      <div className={`text-slate-500`}>{price} 원</div>
      <button
        onClick={add}
        className={`w-full py-1 rounded-lg bg-indigo-600 text-white cursor-pointer`}
      >
        담기
      </button>
    </article>
  );
};

export default Item;
