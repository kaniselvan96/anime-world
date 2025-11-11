import { Stack } from "@mui/material";
import React from "react";
import { AWText } from "../atoms/Text/AWText";

type AnimeInfoRowPropTypes = {
  label: string;
  text: string | number;
};
const AnimeInfoRow = ({ label, text }: AnimeInfoRowPropTypes) => {
  return (
    <Stack direction="row" spacing={1}>
      <AWText text={label} fontWeight="bold" />
      <AWText text={String(text)} />
    </Stack>
  );
};

export default AnimeInfoRow;
