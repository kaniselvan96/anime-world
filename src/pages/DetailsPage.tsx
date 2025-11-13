import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHook";
import { fetchAnime } from "../redux/animeSlice";
import AnimeDetailsCard from "../components/organisms/AnimeDetailsCard";
import { Box } from "@mui/material";

const DetailsPage = () => {
  const dispatch = useAppDispatch();
  const { selectedAnime, loading } = useAppSelector((state) => state.anime);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchAnime(Number(id)));
  }, [dispatch, id]);
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <AnimeDetailsCard
        anime={selectedAnime || undefined}
        isLoading={loading}
      />
    </Box>
  );
};

export default DetailsPage;
