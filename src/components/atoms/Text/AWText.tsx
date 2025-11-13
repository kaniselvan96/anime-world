import { Skeleton, Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import type { ReactNode } from "react";

interface TextProps extends TypographyProps {
  text: string | ReactNode;
  isLoading?: boolean;
  skeletonWidth?: string;
  skeletonHeight?: string;
}

const AWText = ({
  text,
  variant = "body1",
  isLoading,
  skeletonWidth,
  skeletonHeight,
  ...props
}: TextProps) => {
  if (isLoading)
    return <Skeleton width={skeletonWidth} height={skeletonHeight} />;
  return (
    <Typography variant={variant} {...props}>
      {text}
    </Typography>
  );
};

export default AWText;
