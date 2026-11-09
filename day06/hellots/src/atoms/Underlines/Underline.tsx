import { borderClass } from "@/src/design/color";

type UnderlineProps = {
  type?: `email` | `password`;
  state?: `default` | `active` | `error`;
  placeholder?: `Email` | `Password`;
};

const Underline = ({
  type = `email`,
  state = `active`,
  placeholder = "Email",
}: UnderlineProps) => {
  return (
    <div className={`w-fit px-3 py-2 border-b-4 ${borderClass[state]}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`focus:outline-none rounded-lg`}
      />
    </div>
  );
};

export default Underline;
