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

export type TTest = { name: string; price: number };

type TBread = `허니오트` | `플랫브래드` | `오레가노` | `위트`;
type TSeasonBread = `소금빵` | `단팥빵`;
type TCheese = `아메리칸` | `슈레드` | `모짜렐라`;
type TVege = `토마토` | `양상추` | `양파` | `피망` | `피클` | `올리브`;
type TSauce = `치폴레` | `렌치` | `오일` | `케찹` | `머스타드`;

type TSubway<
  T extends TBread | TSeasonBread,
  U extends TCheese,
  V extends TVege[],
  X extends TSauce[],
> = { bread: T; cheese: U; vege: V; sauce: X };

const myMenu: TSubway<TBread, TCheese, TVege[], TSauce[]> = {
  bread: "오레가노",
  cheese: "모짜렐라",
  vege: ["양상추", "양파", "올리브"],
  sauce: ["렌치", "머스타드", "오일"],
};

const myMenu2: TSubway<TSeasonBread, TCheese, TVege[], TSauce[]> = {
  bread: "단팥빵",
  cheese: "모짜렐라",
  vege: ["양상추", "양파", "올리브"],
  sauce: ["렌치", "머스타드", "오일"],
};

const makeSandwich = <
  B extends TBread,
  C extends TCheese,
  V extends TVege[],
  S extends TSauce[],
>(
  bread: B,
  cheese: C,
  vege: V,
  sauce: S,
) => {
  return { bread, cheese, vege, sauce };
};

const myMenu3 = makeSandwich(
  "오레가노",
  "모짜렐라",
  [`양상추`, `올리브`],
  [`렌치`, `머스타드`],
);
