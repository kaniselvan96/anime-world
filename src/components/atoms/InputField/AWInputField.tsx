import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

type AWInputFieldProps = TextFieldProps & {
  label: string;
};

const AWInputField = ({ label = "", ...props }: AWInputFieldProps) => {
  return <TextField label={label} {...props} />;
};

export default AWInputField;
