import { borderClass } from "@/src/design/color";

type InputProps = {
  placeholder?: `Default` | `Active`;
  state?: `default` | `active` | `error`;
};

const Input = ({ state = `default`, placeholder = `Default` }: InputProps) => {
  return (
    <div className={`w-fit p-2 border ${borderClass[state]} rounded-lg`}>
      <input
        placeholder={placeholder}
        className={`focus:outline-none rounded-lg`}
      />
    </div>
  );
};

export default Input;
