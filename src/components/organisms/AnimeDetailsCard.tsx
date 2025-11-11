import { Card, CardContent, Stack, type CardProps } from "@mui/material";
import React from "react";
import type { Anime } from "../../types/anime";
import AWImage from "../atoms/Image/AWImage";
import { AWText } from "../atoms/Text/AWText";
import AnimeInfoRow from "../molecules/AnimeInfoRow";

type AnimeDetailsCardPropsType = CardProps & {
  anime: Anime | undefined;
  onClick?: (id: number) => void;
  isLoading?: boolean;
  height?: string;
  width?: string;
};

const AnimeDetailsCard = ({
  anime,
  isLoading = false,
}: AnimeDetailsCardPropsType) => {
  if (isLoading || anime === undefined) return <></>;
  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <CardContent>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <AWImage
            src={anime?.images?.jpg?.image_url}
            alt={"anime-details-image"}
            height={300}
          />
          <Stack spacing={1}>
            <AWText text={anime.title} variant="h5" fontWeight={"bold"} />
            <AnimeInfoRow label="Rating" text={anime.rating || ""} />
            <AWText text={anime.synopsis || ""} variant="body2" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AnimeDetailsCard;
