// 조건부 타입

// 1. T extends U ? X : Y
type TCity = `도쿄` | `오사카` | `교토` | `삿포로` | `후쿠오카` | `나고야`;

type IsCap<C> = C extends `도쿄` ? `수도` : `지방 도시`;

type A = IsCap<`도쿄`>;
type B = IsCap<`후쿠오카`>;

// 관서 / 관동
type IsKansai<C> = C extends `오사카` | `교토` ? `관서` : `나머지`;
type C = IsKansai<`도쿄`>;
type D = IsKansai<`교토`>;

// 2. 연속

type RegionOf<C> = C extends `도쿄` | `요코하마`
  ? `관동`
  : C extends `오사카` | `교토`
    ? `관서`
    : C extends `삿포로`
      ? `훗카이도`
      : C extends `후쿠오카`
        ? `규슈`
        : `어딘가`;

type E = RegionOf<`서울`>;

type KansaiOnly<C> = C extends `오사카` | `교토` ? C : never;

// 3. infer (추론하다)
type StationCity<S> = S extends `${infer C}역` ? C : never;

type F = StationCity<`하네다역`>;
type F2 = StationCity<`하네다공항`>;

type Route<S> = S extends `${infer From} -> ${infer To}` ? [From, To] : never;
type G = Route<`유럽 -> 아프리카`>;

type CityOf<T> = T extends { city: infer C } ? C : never;
type H = CityOf<{ city: `Newyork`; time: 14 }>;

// infer + extends
type Nights<S> = S extends `${infer N extends number}박${string}`
  ? N
  : `오찬시기`;
type I = Nights<`4박 5일`>;

type DaysNights<S> = S extends
  | `${infer N1 extends number}박${infer N2 extends number}일`
  | `${infer N1 extends number}박${string}${infer N2 extends number}일`
  ? { nights: N1; days: N2 }
  : `당일치기`;
type J = DaysNights<`4박 5일`>;
type K = DaysNights<`4박5일`>;

type Destination<S> = S extends `${infer _} -> ${infer Rest}`
  ? Destination<Rest>
  : S;
type Z = Destination<`도쿄 -> 나고야 -> 오사카 -> 시모노세키 -> 후쿠오카`>;
