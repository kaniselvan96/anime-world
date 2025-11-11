import { CardMedia } from "@mui/material";
import React from "react";

type ImagePropsType = {
  src: string;
  alt: string;
  height?: number;
};

const AWImage = ({ src, alt, height = 200 }: ImagePropsType) => {
  return <CardMedia component="img" height={height} image={src} alt={alt} />;
};

export default AWImage;
