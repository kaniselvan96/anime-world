import type { ReactNode } from "react";
import { Button, IconButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";

type AWButtonProps = ButtonProps & {
  label: ReactNode;
  isIconButton?: boolean;
};
const AWButton = ({ label, isIconButton = false, ...props }: AWButtonProps) => {
  if (isIconButton) return <IconButton {...props}>{label}</IconButton>;

  return (
    <Button variant="contained" {...props}>
      {label}
    </Button>
  );
};

export default AWButton;
