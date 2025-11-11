import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";

interface TextProps extends TypographyProps {
  text: string;
}

export const AWText = ({ text, variant = "body1", ...props }: TextProps) => (
  <Typography variant={variant} {...props}>
    {text}
  </Typography>
);
