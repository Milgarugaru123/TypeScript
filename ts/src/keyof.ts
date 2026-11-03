type Subway = {
  bread: string;
  cheese: string;
  baked: boolean;
  vege: string[];
  sauce: string[];
};

type A = keyof Subway;

const test: A = "baked";
const test1: A = "sauce";
