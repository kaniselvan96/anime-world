import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHook";
import { fetchAnime } from "../redux/animeSlice";
import AnimeDetailsCard from "../components/organisms/AnimeDetailsCard";

const DetailsPage = () => {
  const dispatch = useAppDispatch();
  const { selectedAnime, loading } = useAppSelector((state) => state.anime);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchAnime(Number(id)));
  }, [dispatch, id]);
  return (
    <div>
      <AnimeDetailsCard
        anime={selectedAnime || undefined}
        isLoading={loading}
      />
    </div>
  );
};

export default DetailsPage;
