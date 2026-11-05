//  1. typeof

const bigArch = {
  main: `빅아치`,
  side: `감자튀김`,
  drink: `콜라`,
  price: 7200,
};
type A = typeof bigArch;

const makeSet = (main: string, size: `M` | `L`) => {
  return { main, size, price: size == `M` ? 5000 : 6000 };
};
type B = typeof makeSet;
type C = Parameters<B>;
type D = ReturnType<B>;

// 2. keyof
type E = keyof D;

// 3. keyof, typeof 합침
const coffee = { name: `아메리카노`, price: 5000, shots: 2 };
type F = keyof typeof coffee;

// 4. 인덴스 접근 (indexed access)
// 특정 속성 타입 꺼낼 때
type kingset = {
  main: string;
  size: `M` | `L`;
  price: number;
  options: { ice: boolean; sauce: string[] };
};
type TSize1 = kingset[`main`];
type TSize2 = kingset[`size`];
type TSize3 = Extract<keyof kingset[`options`], `ice`>;

// 5. T[keyof  T]
// 객체 타입의 모든 값을 유니온
type TSize4 = kingset[keyof kingset];

type Car = {
  name: string;
  price: number;
  brand: string;
  year: `20${number}`;
};

type Z = Car[keyof Car];
