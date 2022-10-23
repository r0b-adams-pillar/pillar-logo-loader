import { TypographyProps } from "@chakra-ui/react";
import "@fontsource/lato";

type StyleWeight = {
  bold: TypographyProps;
};

type StyleNames =
  | "6xl"
  | "5xl"
  | "4xl"
  | "3xl"
  | "2xl"
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "xs";

type TextStyles = {
  [key in StyleNames]: TypographyProps & StyleWeight;
};

const baseFontStyle = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "500",
};

const baseTextStyles = {
  "6xl": {
    ...baseFontStyle,
    fontSize: "32px",
    lineHeight: "38px",
    letterSpacing: "0px",
  },
  "5xl": {
    ...baseFontStyle,
    fontSize: "27px",
    lineHeight: "36px",
    letterSpacing: "0px",
  },
  "4xl": {
    ...baseFontStyle,
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "0px",
  },
  "3xl": {
    ...baseFontStyle,
    fontSize: "21px",
    lineHeight: "26px",
    letterSpacing: "0px",
  },
  "2xl": {
    ...baseFontStyle,
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "0px",
  },
  xl: {
    ...baseFontStyle,
    fontSize: "17px",
    lineHeight: "22px",
    letterSpacing: "0px",
  },
  lg: {
    ...baseFontStyle,
    fontSize: "15px",
    lineHeight: "20px",
    letterSpacing: "0px",
  },
  md: {
    ...baseFontStyle,
    fontSize: "13px",
    lineHeight: "18px",
    letterSpacing: "0.7px",
  },
  sm: {
    ...baseFontStyle,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0px",
  },
  xs: {
    ...baseFontStyle,
    fontSize: "11px",
    lineHeight: "16px",
    letterSpacing: "0.11px",
  },
};

export const textStyles: TextStyles = {
  "6xl": {
    ...baseTextStyles["6xl"],
    bold: {
      ...baseTextStyles["6xl"],
      fontWeight: "600",
    },
  },
  "5xl": {
    ...baseTextStyles["5xl"],
    bold: {
      ...baseTextStyles["5xl"],
      fontWeight: "600",
    },
  },
  "4xl": {
    ...baseTextStyles["4xl"],
    bold: {
      ...baseTextStyles["4xl"],
      fontWeight: "600",
    },
  },
  "3xl": {
    ...baseTextStyles["3xl"],
    bold: {
      ...baseTextStyles["3xl"],
      fontWeight: "600",
    },
  },
  "2xl": {
    ...baseTextStyles["2xl"],
    bold: {
      ...baseTextStyles["2xl"],
      fontWeight: "600",
    },
  },
  xl: {
    ...baseTextStyles["xl"],
    bold: {
      ...baseTextStyles["xl"],
      fontWeight: "600",
    },
  },
  lg: {
    ...baseTextStyles["lg"],
    bold: {
      ...baseTextStyles["lg"],
      fontWeight: "600",
    },
  },
  md: {
    ...baseTextStyles["md"],
    bold: {
      ...baseTextStyles["md"],
      fontWeight: "600",
    },
  },
  sm: {
    ...baseTextStyles["sm"],
    bold: {
      ...baseTextStyles["sm"],
      fontWeight: "600",
    },
  },
  xs: {
    ...baseTextStyles["xs"],
    bold: {
      ...baseTextStyles["xs"],
      fontWeight: "600",
    },
  },
};
