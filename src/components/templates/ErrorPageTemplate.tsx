import { Box } from "@mui/material";
import AWText from "../atoms/Text/AWText";

type ErrorPageTemplatePropsType = {
  text?: string;
};

const ErrorPageTemplate = ({
  text = "Oops, Page Not Found",
}: ErrorPageTemplatePropsType) => {
  return (
    <Box
      sx={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      <AWText
        text={"404"}
        variant="h1"
        sx={{
          fontSize: { xs: "6rem", md: "10rem" },
          fontWeight: "bold",
          color: "#f81302ff",
        }}
      />

      <AWText
        text={text}
        variant="h5"
        sx={{
          mt: 2,
          color: "#0ff",
          textShadow: "0 0 5px #0ff, 0 0 10px #0ff",
        }}
      />
    </Box>
  );
};

export default ErrorPageTemplate;
