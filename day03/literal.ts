// 템플릿 리터럴 타입

type TSushi = `계란말이초밥` | `연어초밥` | `새우초밥` | `장어초밥`;
type TShusi1 = `${string}초밥`;

const a11: TShusi1 = `고기초밥`;

type TFish = `계란말이` | `연어` | `새우` | `장어`;
type TShusi2 = `${TFish}초밥`;
type TPixel = `${number}px`;

type THexOne =
  | `0`
  | `1`
  | `2`
  | `3`
  | `4`
  | `5`
  | `6`
  | `7`
  | `8`
  | `9`
  | `a`
  | `b`
  | `c`
  | `d`
  | `e`
  | `f`;

type TColor = THexOne;

type THex = `#${TColor}${TColor}${TColor}${TColor}${TColor}${TColor}`;

const hex1: THex = `#123456`;
