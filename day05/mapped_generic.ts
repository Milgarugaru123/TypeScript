type Stock = `하이닉스` | `삼성전자` | `LG`;

type Checked<T extends string> = {
  [K in T]: boolean;
};

const myStock: Checked<Stock> = {
  하이닉스: false,
  삼성전자: true,
  LG: false,
};

type U1 = Capitalize<`hello`>;
type U2 = Uncapitalize<`HELLO`>;
type U3 = Uppercase<`hello`>;
type U4 = Lowercase<`HELLO`>;

type TEvent = `click` | `mouseover` | `submit`;
type Handler = `on${Capitalize<TEvent>}`;

type TTest = {
  main: string;
  sub: string;
};

type Prefixed<T> = {
  [K in keyof T as `my${Capitalize<K & string>}`]: T[K];
};
const a2: Prefixed<TTest> = {
  myMain: ``,
  mySub: ``,
};
