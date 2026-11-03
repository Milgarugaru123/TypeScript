import { BACKGROUND_COLOR, BORDER_RADIUS } from "./styles/colors";

type TButtonProps = {
  backgroundColor: keyof typeof BACKGROUND_COLOR;
  borderRadius: keyof typeof BORDER_RADIUS;
};

const Button = ({ backgroundColor, borderRadius }: TButtonProps) => {
  return (
    <button
      style={{
        padding: `10px 45px`,
        color: `white`,
        backgroundColor: BACKGROUND_COLOR[backgroundColor],
        borderRadius: BORDER_RADIUS[borderRadius],
        border: `none`,
      }}
    >
      버튼
    </button>
  );
};

export default Button;
