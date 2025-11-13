import { Box } from "@mui/material";
import type { Anime } from "../../types/anime";
import AnimeCard from "../molecules/AnimeCard";
import AWText from "../atoms/Text/AWText";
import AWPagination from "../molecules/AWPagination";
import type { Pagination } from "../../types/pagination";

interface AnimeListProps {
  animes: Anime[];
  onSelect?: (id: number) => void;
  isLoading: boolean;
  title?: string;
  pagination?: Pagination;
  setPage?: (page: number) => void;
}

const EmptyAnime = {
  mal_id: 0,
  title: "",
  images: {
    jpg: {
      image_url: "",
      small_image_url: "",
      large_image_url: "",
    },
  },
};

const AnimeList = ({
  animes,
  onSelect,
  isLoading = true,
  title,
  pagination,
  setPage,
}: AnimeListProps) => {
  return (
    <Box
      style={{
        display: "flex",
        gap: 20,
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {isLoading ? (
        <>
          {Array.from(Array(20), () => {
            return <AnimeCard anime={EmptyAnime} isLoading={isLoading} />;
          })}
        </>
      ) : animes?.length < 1 ? (
        <>
          <AWText text="No Anime Found" variant="h6" />
        </>
      ) : (
        <>
          <Box
            sx={{
              justifyContent: "start",
              width: "90%",
              marginBlockEnd: "20px",
            }}
          >
            <AWText variant="h4" text={title} />
          </Box>
          {animes.map((anime) => (
            <Box key={anime.mal_id}>
              <AnimeCard
                key={anime.mal_id}
                anime={anime}
                onClick={() => {
                  if (onSelect) onSelect(anime.mal_id);
                }}
              />
            </Box>
          ))}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            {pagination && (
              <AWPagination
                page={pagination.current_page}
                count={pagination.items.per_page}
                total={pagination.items.total}
                onChangePage={(page) => {
                  if (setPage) setPage(page);
                }}
              />
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default AnimeList;
