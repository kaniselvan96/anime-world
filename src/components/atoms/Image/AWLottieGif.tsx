import {
  DotLottieReact,
  type DotLottieReactProps,
} from "@lottiefiles/dotlottie-react";

type AWLottieGifPropsType = DotLottieReactProps & {
  src: string;
};
const AWLottieGif = ({ src, ...props }: AWLottieGifPropsType) => {
  return <DotLottieReact src={src} loop autoplay {...props} />;
};

export default AWLottieGif;
