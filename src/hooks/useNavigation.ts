import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const clickToNavigate = (url: string) => {
    navigate(url);
  };
  return { clickToNavigate };
};
