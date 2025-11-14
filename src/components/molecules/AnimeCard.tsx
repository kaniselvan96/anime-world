import {
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Tooltip,
  type CardProps,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import type { Anime } from "../../types/anime";
import AWImage from "../atoms/Image/AWImage";
import AWText from "../atoms/Text/AWText";
import AWButton from "../atoms/Button/AWButton";
import {
  addToLocalStorage,
  FAVORITES_KEY,
  getLocalStorage,
  removeFromLocalStorage,
} from "../../utils/localStorage";
import { useEffect, useState } from "react";

type AnimeCardPropsType = CardProps & {
  anime: Anime;
  onClick?: (id: number) => void;
  isLoading?: boolean;
  height?: string;
  width?: string;
  isFavourite?: boolean;
};

const AnimeCard = ({
  anime,
  onClick,
  isLoading = false,
  height = "350px",
  width = "250px",
}: AnimeCardPropsType) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromLocalStorage<Anime>(FAVORITES_KEY, anime?.mal_id);
    } else {
      addToLocalStorage<Anime>(FAVORITES_KEY, {
        id: anime?.mal_id,
        ...anime,
      });
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const favorites = getLocalStorage<Anime>(FAVORITES_KEY);
    setIsFavorite(favorites.some((a) => a.mal_id === anime.mal_id));
  }, [anime.mal_id]);

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
        onClick={() => onClick?.(anime.mal_id)}
      >
        <AWImage src={anime?.images?.jpg?.image_url} alt={"anime-image"} />
        <CardContent>
          <Tooltip title={anime?.title}>
            <AWText
              text={anime?.title}
              variant="body1"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                fontWeight: "800",
                lineHeight: "1.4",
                height: "2.8em",
                maxHeight: "2.8em",
              }}
            />
          </Tooltip>
          <AWText text={anime?.year ?? "-"} variant="body1" />
        </CardContent>
        <CardActions sx={{ alignItems: "end", justifyContent: "end" }}>
          <AWButton
            isIconButton={true}
            label={
              isFavorite ? (
                <FavoriteOutlinedIcon />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )
            }
            size="small"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite();
            }}
          />
        </CardActions>
      </Card>
    );
};

export default AnimeCard;
