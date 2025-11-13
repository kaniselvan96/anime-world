import { CardMedia, Skeleton } from "@mui/material";

type ImagePropsType = {
  src: string;
  alt: string;
  height?: number;
  isLoading?: boolean;
};

const AWImage = ({ src, alt, height = 200, isLoading }: ImagePropsType) => {
  if (isLoading)
    return <Skeleton variant="rectangular" width={height} height={height} />;
  return (
    <CardMedia
      component="img"
      height={height}
      image={src}
      alt={alt}
      sx={{ alignSelf: "center" }}
    />
  );
};

export default AWImage;
