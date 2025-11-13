import type { ReactNode } from "react";
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

type AWButtonProps = ButtonProps & {
  label: ReactNode;
};
const AWButton = ({ label, ...props }: AWButtonProps) => {
  return (
    <Button variant="contained" {...props}>
      {label}
    </Button>
  );
};

export default AWButton;
