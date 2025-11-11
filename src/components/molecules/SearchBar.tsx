import React from "react";
import AWInputField from "../atoms/InputField/AWInputField";
import AWButton from "../atoms/Button/AWButton";

type AWSearchBarProps = {
  label: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AWSearchBar = ({ label, onSearch }: AWSearchBarProps) => {
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <AWInputField label={label} onChange={onSearch} variant="outlined" />
      <AWButton label={<span>Search</span>} />
    </div>
  );
};

export default AWSearchBar;
