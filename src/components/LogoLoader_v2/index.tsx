import { useEffect } from "react";
import { useTheme } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

import { paths } from "./paths";
import { LogoSvg } from "./LogoSvg";
import { LogoBackground } from "./LogoBackground";

interface ILogoLoader {
  size?: number;
  loader?: boolean;
  altColors?: boolean;
  withBackground?: boolean;
  loopDuration?: number;
  loopDelay?: number;
}

export const LogoLoader: React.FC<ILogoLoader> = ({
  size = 64,
  loader = false,
  altColors = false,
  withBackground = true,
  loopDuration = 1.5,
  loopDelay = 0,
}): JSX.Element => {
  const animation = useAnimation();
  const { colors } = useTheme();

  const BLUE_100 = colors.blue["100"];
  const BLUE_500 = colors.blue["500"];
  const GRAY_400 = colors.gray["400"];
  const pathDuration = loopDuration / paths.length;

  useEffect(() => {
    animation.start(pathIdx => ({
      fill: altColors
        ? [BLUE_500, GRAY_400, BLUE_500]
        : [BLUE_100, GRAY_400, BLUE_100],
      scale: altColors ? [1, 1.05, 1] : [1, 0.85, 1],
      transition: {
        duration: pathDuration,
        delay: pathDuration * pathIdx,
        repeatDelay: loopDuration - pathDuration + loopDelay,
        repeat: Infinity,
      },
    }));
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <LogoSvg size={size}>
      {withBackground && <LogoBackground altColors={altColors} />}
      {loader
        ? paths.map((path, idx) => (
            <motion.path
              custom={idx}
              key={path.id}
              id={path.id}
              d={path.d}
              fill={altColors ? BLUE_500 : BLUE_100}
              animate={animation}
            />
          ))
        : paths.map(path => (
            <path
              key={path.id}
              id={path.id}
              d={path.d}
              fill={altColors ? BLUE_500 : BLUE_100}
            />
          ))}
    </LogoSvg>
  );
};
