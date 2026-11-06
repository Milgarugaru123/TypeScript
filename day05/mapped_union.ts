type TMenu = `빅맥` | `상하이` | `1955`;

type TStock = {
  [key in TMenu]: number;
};

const ourStock: TStock = { 빅맥: 12, 상하이: 15, 1955: 13 };

type TSet = {
  main: string;
  sub: string;
  price: number;
};

type TChecked = { [key in keyof TSet]: boolean };

type TCopyList = {
  [K in keyof TSet]: TSet[K][];
};

type TCopyOptional = {
  [K in keyof TSet]?: TSet[K];
};
