import { Card, CardContent } from "@mui/material";
import type { Anime } from "../../types/anime";
import AWImage from "../atoms/Image/AWImage";
import { AWText } from "../atoms/Text/AWText";

type AnimeCardPropsType = {
  anime: Anime;
  onClick?: (id: number) => void;
};

const AnimeCard = ({ anime, onClick }: AnimeCardPropsType) => {
  return (
    <Card
      sx={{ height: 350, width: 250, cursor: "pointer" }}
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
