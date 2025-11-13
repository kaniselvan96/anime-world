import { Stack } from "@mui/material";
import AWText from "../atoms/Text/AWText";

type AnimeInfoRowPropTypes = {
  label: string;
  text: string | number;
  isLoading?: boolean;
};
const AnimeInfoRow = ({ label, text, isLoading }: AnimeInfoRowPropTypes) => {
  return (
    <Stack direction="row" spacing={1}>
      <AWText
        text={label}
        fontWeight="bold"
        isLoading={isLoading}
        skeletonWidth="100px"
      />
      <AWText text={String(text)} skeletonWidth="200px" isLoading={isLoading} />
    </Stack>
  );
};

export default AnimeInfoRow;
