import { useEffect, useState } from "react";
import AWLottieGif from "../atoms/Image/AWLottieGif";

type PageLoaderProps = {
  src: string;
  duration?: number;
  sessionKey?: string;
};

const PageLoader = ({ src, duration = 2000, sessionKey }: PageLoaderProps) => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const alreadyLoaded = sessionKey
      ? sessionStorage.getItem(sessionKey)
      : false;

    if (alreadyLoaded) {
      setShowLoader(false);
      return;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowLoader(false);
        if (sessionKey) sessionStorage.setItem(sessionKey, "true");
      }, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, sessionKey]);

  if (!showLoader) return <></>;

  return (
    <div
      className={fadeOut ? "fade-out" : "fade-in"}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#1e1e2f",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <AWLottieGif src={src} />
    </div>
  );
};

export default PageLoader;
