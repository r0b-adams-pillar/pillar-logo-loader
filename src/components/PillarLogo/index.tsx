import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@chakra-ui/react";

import { paths } from "./paths";
import { LogoSvg } from "./LogoSvg";
import { LogoBackground } from "./LogoBackground";

interface IPillarLogo {
  size?: number;
  loader?: boolean;
  altColors?: boolean;
  withBackground?: boolean;
  loopDuration?: number;
  loopDelay?: number;
}

export const PillarLogo: React.FC<IPillarLogo> = ({
  size = 128,
  loader = false,
  altColors = false,
  withBackground = true,
  loopDuration = 1,
  loopDelay = 0,
}): JSX.Element => {
  const { colors } = useTheme();
  const BLUE_100 = colors.blue["100"];
  const BLUE_500 = colors.blue["500"];
  const GRAY_400 = colors.gray["400"];

  const staticPaths = useMemo(() => {
    return paths.map(path => (
      <path
        key={path.id}
        id={path.id}
        d={path.d}
        fill={altColors ? BLUE_500 : BLUE_100}
      />
    ));
  }, [BLUE_100, BLUE_500, altColors]);

  const animatedPaths = useMemo(() => {
    const pathDuration = loopDuration! / paths.length;
    return paths.map((path, idx) => (
      <motion.path
        key={path.id}
        id={path.id}
        d={path.d}
        fill={altColors ? BLUE_500 : BLUE_100}
        animate={{
          fill: altColors
            ? [BLUE_500, GRAY_400, BLUE_500]
            : [BLUE_100, GRAY_400, BLUE_100],
          scale: altColors ? [1, 1.05, 1] : [1, 0.85, 1],
        }}
        transition={{
          duration: pathDuration,
          delay: pathDuration * idx,
          repeatDelay: pathDuration * (paths.length - 1) + loopDelay,
          repeat: Infinity,
        }}
      />
    ));
  }, [loopDuration, loopDelay, altColors, GRAY_400, BLUE_100, BLUE_500]);

  return (
    <LogoSvg size={size}>
      {withBackground && <LogoBackground altColors={altColors} />}
      {loader ? animatedPaths : staticPaths}
    </LogoSvg>
  );
};
