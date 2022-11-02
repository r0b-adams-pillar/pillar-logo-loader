import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ILogoSvg {
  size: number;
  children?: ReactNode;
}

export const LogoSvg: React.FC<ILogoSvg> = ({ size, children }) => {
  return (
    <AnimatePresence>
      <motion.svg
        id="pillar-logo"
        key="pillar-logo"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        {children}
      </motion.svg>
    </AnimatePresence>
  );
};
