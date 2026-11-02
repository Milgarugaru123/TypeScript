// 변수, 타입 + 어노테이션

// Union(유니온)
const a1: string | number = 1;
const a2: string | null = "1";
const a3: number | number[] = [1];
const a4: { name: string; price: string | number } = {
  name: "choco",
  price: 1000,
};

// Intersection(교집합)
// never 타입: 그딴 건 없다란 뜻
const b1: { name: string } & { age: number } = {
  name: "name",
  age: 20,
};
