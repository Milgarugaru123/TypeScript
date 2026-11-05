const a = `노노카짱`;
const a1 = 123;
const a2 = false;
const a3 = {};
const a4 = [];
const a5 = () => {};
class Oh {}
const a6 = Oh;
const a7 = new Promise((success, fail) => {});

const b = typeof a;
const b1 = typeof a1;
const b2 = typeof a2;
const b3 = typeof a3;
const b4 = typeof a4;
const b5 = typeof a5;
const b6 = typeof a6;
const b7 = typeof a7;
console.log(b, b1, b2, b3, b4, b5, b6, b7);

// 4. in 연산자
const chocolate = { name: `마카다미아 초코`, price: 8000 };
const c = `name` in chocolate;
const d = `tasty` in chocolate;
console.log(c, d);

// 5. instanceof
class Student {}

const yoon = new Student();
const oh = new Student();
const e1 = yoon instanceof Student;
const e2 = oh instanceof Student;
console.log(e1, e2);
