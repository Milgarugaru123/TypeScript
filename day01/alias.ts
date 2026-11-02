// alias(별명)

type Coffee = {
  name: "아메리카노" | "라떼" | "아샷추" | "아이스커피";
  price: number;
  hasShot?: boolean;
};

const totoru: Coffee = { name: "아이스커피", price: 3000, hasShot: true };

// 맥도날드 세트 알리아스 만들기
// 메인, 서브, 음료
type Main = "빅맥" | "맥치킨" | "1955" | "상하이버거";
type MainMorning = "베이컨에그" | "에그" | "소세지" | "팬케이크";
type Sub = "감자튀김" | "맥윙" | "맥너겟" | "스낵랩";
type SubMorning = "해시브라운" | "스낵랩";
type Drink = "콜라" | "환타" | "아메리카노" | "밀크쉐이크" | "아이스티";
type DrinkMorning = "아메리카노" | "아이스티";

type MacNormal = {
  main: Main;
  sub: Sub;
  drink: Drink;
};
type MacMorning = {
  main: MainMorning;
  sub: SubMorning;
  drink: DrinkMorning;
};

type MacSet = MacNormal | MacMorning;

const menu: MacSet = {
  main: "맥치킨",
  sub: "감자튀김",
  drink: "콜라",
};
