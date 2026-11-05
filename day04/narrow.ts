// 1. typeof
const order = (menu: string | number) => {
  if (typeof menu == `string`) {
    // menu는 string
  } else {
    // menu는 number
  }
};

// 2. truthiness
const applyCoupon = (code?: string) => {
  if (code) {
    return `쿠폰 ${code.toUpperCase()}`;
  }
  return `쿠폰 없음`;
};
console.log(applyCoupon, () => {
  applyCoupon(`coupon`);
});

const checkCart = (items: string[] | null) => {
  if (items && items.length) {
    return `${items.length}개 담김`;
  }
  return `장바구니가 비어 있음`;
};
console.log(checkCart, () => {
  checkCart([`1`, `2`]);
});

// 3. 동등 비교
type TSize = `R` | `L` | `F`;
const pizzaPrice = (size: TSize) => {
  if (size == `R`) return 10000;
  else if (size == "L") return 15000;
  else if (size == "F") return 20000;
  else return `오류`;
};

// 4. in 연산자
type TBurger = { name: string; patty: number };
type TDrink = { name: string; ice: boolean };
const describe = (item: TBurger | TDrink) => {
  if (`patty` in item) {
    return `${item.name} (패티 ${item.patty}장)`;
  }
  return `${item.name} (얼음 ${item.ice ? `있음 ` : `없음`})`;
};

// 5. instanceof
const formatOrderTime = (time: Date | string) => {
  if (time instanceof Date) {
    return time.toLocaleDateString();
  }
  return time.toUpperCase();
};

// 6. early return
// return, throw 등으로 필터링 되면 이후에는 자동으로 제외됨
type TOrder = { menu: string; qty: number } | null;
const checkout = (order: TOrder) => {
  if (!order) return `주문 없음`;
  //   order 오브젝트 타입 확정
  return `${order.menu}`;
};

const pay = (amount: number | undefined) => {
  if (amount == undefined) {
    throw new Error(`돈이 없음`);
  }
  return amount;
};
