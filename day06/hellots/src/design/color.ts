type state = `default` | `active` | `error`;

type A = { [K in state]: string }; // `border-[${Hex}]`

export const borderClass: A = {
  default: `border-[#e9e9e9]`,
  active: `border-[#1AD4C5]`,
  error: `border-[#ff59f5]`,
} as const;

export const colors = {
  primary: {
    50: "#E8FBF9",
    100: "#D1F6F3",
    200: "#A3EEE8",
    300: "#76E5DC",
    400: "#48DDD1",
    500: "#1AD4C5",
    600: "#15AA9E",
    700: "#107F76",
    800: "#0A554F",
    900: "#052A27",
  },
  neutral: {
    50: "#FAFAFA",
    100: "#F4F4F4",
    200: "#E9E9E9",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    black: "#000000",
    offWhite: "#F7F7F7",
    pureWhite: "#FFFFFF",
  },
  secondary: {
    50: "#FFEEEF",
    100: "#FFDEDF",
    200: "#FFBDBF",
    300: "#FF9B9E",
    400: "#FF7A7E",
    500: "#FF595E",
    600: "#CC474B",
    700: "#993538",
    800: "#662426",
    900: "#331213",
  },
} as const;

// 투명도: 8자리 hex의 알파 접미사 (예: "#1AD4C5" + "66" → 40%)
const alpha = {
  100: "FF",
  80: "CC",
  64: "A3",
  56: "8F",
  40: "66",
  24: "3D",
  16: "29",
  8: "14",
  4: "0A",
} as const;

type AlphaLevel = keyof typeof alpha;

export const withAlpha = (hex: string, level: AlphaLevel) =>
  `${hex}${alpha[level]}`;
