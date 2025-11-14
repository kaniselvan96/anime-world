import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type AWLottieGifPropsType = {
  src: string;
};
const AWLottieGif = ({ src }: AWLottieGifPropsType) => {
  return <DotLottieReact src={src} loop autoplay />;
};

export default AWLottieGif;
