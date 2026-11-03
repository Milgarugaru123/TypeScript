import type { CSSProperties } from "react";

type TColor = CSSProperties[`color`];

const Square = () => {
  const a: TColor = "peachpuff";
  const style: CSSProperties = {
    width: `100px`,
    height: `100px`,
    backgroundColor: `red`,
    borderRadius: `20px`,
  };
  return <div style={style}></div>;
};

export default Square;
