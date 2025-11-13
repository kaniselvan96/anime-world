import React from "react";
import AWInputField from "../atoms/InputField/AWInputField";
import AWButton from "../atoms/Button/AWButton";

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
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <AWInputField label={label} onChange={onSearch} variant="outlined" />
      {hasButton && <AWButton label={<span>{buttonLabel}</span>} />}
    </div>
  );
};

export default AWSearchBar;
