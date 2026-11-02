// annotation

const a: number = 1;
const b: string = "1";
const c: boolean = true;

const d: object = { name: "티모" };
const e: { name: string; level: number } = { name: "티모", level: 0 };

// 숫자 배열
const f: number[] = [1, 2, 3, 4, 5];
// 문자열 배열
const g: string[] = [`a`, `b`, `c`, `d`, `e`];
// 오브젝트 {아이스크림 이름, 가격} 배열
const h: { icecream: string; price: number }[] = [
  { icecream: `돼지바`, price: 800 },
  { icecream: `바밤바`, price: 700 },
  { icecream: `투게더`, price: 6500 },
  { icecream: `끌레도르`, price: 2200 },
  { icecream: `메로나`, price: 800 },
];

const add = (x: number, y: number): number => {
  return x + y;
};
// 두 문자를 넣으면 문자를 돌려주는 함수
const addStr = (x: string, y: string): string => {
  return x + y;
};
// 숫자를 넣으면 불리언으로 돌려주는 함수
const numToBool = (x: number): boolean => {
  return !!x;
};
