import React from "react";
import AWInputField from "../atoms/InputField/AWInputField";
import AWButton from "../atoms/Button/AWButton";
import { Box } from "@mui/material";

type AWSearchBarProps = {
  label: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasButton?: boolean;
  buttonLabel?: string;
};

const AWSearchBar = ({
  label,
  onSearch,
  hasButton,
  buttonLabel = "Submit",
}: AWSearchBarProps) => {
  return (
    <Box
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <AWInputField
        label={label}
        onChange={onSearch}
        variant="outlined"
        fullWidth
        style={{ width: "30%" }}
      />
      {hasButton && <AWButton label={<span>{buttonLabel}</span>} />}
    </Box>
  );
};

export default AWSearchBar;
