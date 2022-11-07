import { useTheme } from "@chakra-ui/react";

interface ILogoBackground {
  altColors?: boolean;
}

export const LogoBackground: React.FC<ILogoBackground> = ({ altColors }): JSX.Element => {
  const { colors } = useTheme();

  return (
    <path
      d="M0 20.9455C0 13.6139 0 9.94806 1.42682 7.14776C2.68189 4.68455 4.68455 2.68189 7.14776 1.42682C9.94806 0 13.6139 0 20.9455 0H27.0545C34.3861 0 38.0519 0 40.8522 1.42682C43.3155 2.68189 45.3181 4.68455 46.5732 7.14776C48 9.94806 48 13.6139 48 20.9455V27.0545C48 34.3861 48 38.0519 46.5732 40.8522C45.3181 43.3155 43.3155 45.3181 40.8522 46.5732C38.0519 48 34.3861 48 27.0545 48H20.9455C13.6139 48 9.94806 48 7.14776 46.5732C4.68455 45.3181 2.68189 43.3155 1.42682 40.8522C0 38.0519 0 34.3861 0 27.0545V20.9455Z"
      fill={altColors ? colors.blue["100"] : colors.blue["500"]}
    />
  );
};
