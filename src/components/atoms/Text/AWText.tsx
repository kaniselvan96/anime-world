import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import type { ReactNode } from "react";

interface TextProps extends TypographyProps {
  text: string | ReactNode;
}

export const AWText = ({ text, variant = "body1", ...props }: TextProps) => (
  <Typography variant={variant} {...props}>
    {text}
  </Typography>
);
