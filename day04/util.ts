// 오브젝트 용
type TStudent = { name: string; age: number; subjects: string[] };

type A = Pick<TStudent, "name">;
type B = Omit<TStudent, "name">;

// 리터럴 용
type Fruit = `Apple` | `Orange` | `Grape` | `Kiwi`;

type C = Exclude<Fruit, `Apple`>;
type D = Extract<Fruit, `Apple`>;

// 아고용
type Pokemon = `아고용`;
