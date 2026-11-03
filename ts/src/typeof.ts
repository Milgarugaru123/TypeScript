const user = {
  name: `홍길동`,
  age: 30,
};

type A = typeof user;

const user1 = {
  name: `임꺽정`,
  age: 27,
  gender: `male`,
} as const;

type B = typeof user1;

const user2: B = { name: "임꺽정", age: 27, gender: "male" };

const getAge = (age: number) => age + 1;

type C = typeof getAge;
