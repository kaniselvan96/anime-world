import { AppBar, Box, Toolbar } from "@mui/material";
import AWClickableText from "../atoms/Text/AWClickableText";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1e1e2f", marginBottom: 5, padding: 1 }}
    >
      <Toolbar>
        <AWClickableText
          url="/anime"
          text="Anime World"
          variant="h4"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontFamily: "'Press Start 2P', cursive",
            background: "linear-gradient(90deg, #ff0080, #ff8c00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: 2,
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <AWClickableText
            url="/anime"
            text="Home"
            variant="h5"
            sx={{
              color: currentPath === "/anime" ? "#ff8c00" : "white",
              cursor: "pointer",
              fontFamily: "Quantico",
              fontWeight: "bold",
            }}
          />
          <AWClickableText
            url="/anime/favourites"
            text="Favourites"
            variant="h5"
            sx={{
              color: currentPath === "/anime/favourites" ? "#ff8c00" : "white",
              cursor: "pointer",
              fontFamily: "Quantico",
              fontWeight: "bold",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
