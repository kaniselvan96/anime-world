import { Card, CardContent, Skeleton, type CardProps } from "@mui/material";
import type { Anime } from "../../types/anime";
import AWImage from "../atoms/Image/AWImage";
import { AWText } from "../atoms/Text/AWText";

type AnimeCardPropsType = CardProps & {
  anime: Anime;
  onClick?: (id: number) => void;
  isLoading?: boolean;
  height?: string;
  width?: string;
};

const AnimeCard = ({
  anime,
  onClick,
  isLoading = false,
  height = "350",
  width = "250",
}: AnimeCardPropsType) => {
  if (isLoading)
    return (
      <Card sx={{ height: height, width: width, cursor: "pointer" }}>
        <Skeleton variant="rectangular" width={"100%"} height={"50%"} />
        <CardContent>
          <Skeleton />
          <Skeleton width="60%" />
        </CardContent>
      </Card>
    );
  else
    return (
      <Card
        sx={{ height: height, width: width, cursor: "pointer" }}
        onClick={() => onClick?.(anime.id)}
      >
        <AWImage src={anime?.images?.jpg?.image_url} alt={"anime-image"} />
        <CardContent>
          <AWText text={anime?.title} />
        </CardContent>
      </Card>
    );
};

export default AnimeCard;
