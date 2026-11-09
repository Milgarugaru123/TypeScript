import { colors } from "@/src/design/color";

type ButtonProps = {
  state?: `default` | `hover` | `click` | `active` | `unavail` | `test`;
  size?: `small` | `medium` | `large`;
  color?: `primary` | `neutral` | `secondary`;
  desc: string;
};

const Button = ({
  state = `default`,
  size = `medium`,
  color = `primary`,
  desc,
}: ButtonProps) => {
  const buttonSize = {
    small: `px-2 py-1.5`,
    medium: `px-3 py-2`,
    large: `px-5 py-3`,
  };

  const buttonColor = {
    // default: `border-[${colors[color][800]}] bg-[${colors[color][400]}]`,
    default: `border-[#0A554F] bg-[#48DDD1]`,
    hover: `border-[${colors[color][600]}] bg-[${colors[color][200]}]`,
    click: `border-[${colors[color][900]}] bg-[${colors[color][600]}]`,
    active: `border-[${colors[color][700]}] bg-[${colors[color][500]}]`,
    unavail: `border-[${colors[color][200]}] bg-[${colors[color][50]}]`,
    test: `border-[${colors[color][500]}] bg-[${colors[color][500]}]`,
  };

  //   console.log(`border-[#0A554F]` == `border-[${colors[color][800]}]`);

  return (
    <>
      <button
        className={`w-fit ${buttonSize[size]} border-4 ${buttonColor[state]} rounded-full cursor-pointer`}
      >
        {desc}
      </button>
    </>
  );
};

export default Button;
