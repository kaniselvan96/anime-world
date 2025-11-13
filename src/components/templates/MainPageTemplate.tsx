import type { ReactNode } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import { Box } from "@mui/material";

type MainPageTemplatePropsType = {
  children: ReactNode;
};
const MainPageTemplate = ({ children }: MainPageTemplatePropsType) => {
  return (
    <Box
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <Box style={{ flex: "1" }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainPageTemplate;
