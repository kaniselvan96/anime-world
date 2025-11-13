import { AppBar, Toolbar } from "@mui/material";
import { AWText } from "../atoms/Text/AWText";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1e1e2f", marginBottom: 5 }}
    >
      <Toolbar>
        <AWText
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
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
