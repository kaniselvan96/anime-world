import AWText from "./AWText";
import { useNavigation } from "../../../hooks/useNavigation";
import type { TypographyProps } from "@mui/material";

type AWClickableText = TypographyProps & {
  url: string;
  text: string;
  variant?: string;
};

const AWClickableText = ({
  url,
  text,
  variant = "h6",
  ...props
}: AWClickableText) => {
  const { clickToNavigate } = useNavigation();
  return (
    <AWText
      text={text}
      variant={variant}
      sx={{
        color: "#fff",
        "&:hover": { color: "#ff8c00" },
        cursor: "pointer",
        letterSpacing: 1,
      }}
      onClick={() => {
        clickToNavigate(url);
      }}
      {...props}
    />
  );
};

export default AWClickableText;
