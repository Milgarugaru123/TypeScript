type Student = {
  id: number;
  name: string;
  major: string;
  age: number;
};

type Student1 = {
  id?: number;
  name?: string;
  major?: string;
  age?: number;
};

type A = Partial<Student>;
type B = Required<Student1>;

type C = Pick<Student, `name` | `major`>;
type D = Omit<Student, `name` | `major`>;

type E = Record<`name` | `age` | `major`, number>;
type F = Record<keyof Student, string[]>;
