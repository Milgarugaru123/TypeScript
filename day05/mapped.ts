// 1. in

type LOL = {
  top: string;
  jg: string;
  mid: string;
  ad: string;
  sp: string;
};

const dk: LOL = {
  top: `siwoo`,
  jg: `lucid`,
  mid: `showmaker`,
  ad: `smash`,
  sp: `carer`,
};

const a2 = `jg` in dk;

type A = { [key: string]: string };
const test: A = { nation: `korean` };

type B = { [key in `top` | `jg` | `mid` | `ad` | `sp`]: string };
type B1 = { [key in keyof LOL]: string };

type McDonald = { [key in `main` | `sub` | `beverage`]: {}[] };
const myMenu: McDonald = {
  main: [{ name: `빅맥`, price: 2000 }],
  sub: [{}],
  beverage: [{}],
};
const mySubMenu: Partial<McDonald> = {};
