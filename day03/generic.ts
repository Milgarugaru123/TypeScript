type Box<T> = { value: T };

const aBox: Box<string> = { value: `false` };

type AppleBox = { value: `사과` };
type OrangeBox = { value: `오렌지` };
type KiwiBox = { value: `키위` };
type GrapeBox = { value: `포도` };

type Fruits = `사과` | `오렌지` | `키위` | `포도`;
type FruitBox<T> = { value: T };

const fruitBox: FruitBox<Fruits> = { value: "오렌지" };

type HexBox<T> = { value: T };
// type Hex = `#${HexBox<>}`;

type Main = "빅맥" | "맥치킨" | "1955" | "상하이버거";
type MainMorning = "베이컨에그" | "에그" | "소세지" | "팬케이크";
type Sub = "감자튀김" | "맥윙" | "맥너겟" | "스낵랩";
type SubMorning = "해시브라운" | "스낵랩";
type Drink = "콜라" | "환타" | "아메리카노" | "밀크쉐이크" | "아이스티";
type DrinkMorning = "아메리카노" | "아이스티";

const orderNormal = <M extends Main, S extends Sub[], D extends Drink>(
  main: M,
  sub: S,
  drink: D,
) => {
  return { main, sub, drink };
};

const orderMorning = <
  M extends MainMorning,
  S extends SubMorning[],
  D extends DrinkMorning,
>(
  main: M,
  sub: S,
  drink: D,
) => {
  return { main, sub, drink };
};

const orderAll = <
  M extends Main | MainMorning,
  S extends (Sub | SubMorning)[],
  D extends Drink | DrinkMorning,
>(
  main: M,
  sub: S,
  drink: D,
) => {
  return { main, sub, drink };
};

const myMenu11 = orderAll(
  "상하이버거",
  [`해시브라운`, `감자튀김`],
  "아메리카노",
);

const abc: any = `[1,2,3,4]`;
