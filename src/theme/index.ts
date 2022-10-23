import { extendTheme } from "@chakra-ui/react";

import Button from "./components/button";
import { Heading } from "./components/heading";
import { Text } from "./components/text";
import { colors } from "./colors";
import { globalStyles } from "./styles";
import { radii } from "./foundations/radii/radii";
import { shadows } from "./foundations/shadows/shadows";
import { space } from "./foundations/space/space";
// import { sizes } from "theme/foundations/sizes/sizes";
import { textStyles } from "./text/text";
import { breakpoints } from "./foundations/breakpoints/breakpoints";

export const theme = extendTheme({
  colors,
  styles: {
    global: {
      ...globalStyles,
    },
  },
  components: {
    Button,
    Heading,
    Text,
  },
  textStyles,
  radii,
  shadows,
  space,
  // sizes,
  breakpoints,
});
