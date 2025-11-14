import { AppBar, Box, Toolbar } from "@mui/material";
import AWClickableText from "../atoms/Text/AWClickableText";
import { useLocation } from "react-router-dom";
import { useDeviceType } from "../../hooks/useDisplayType";
import HamburgerMenu from "../molecules/HamburgerMenu";

const Navbar = () => {
  const location = useLocation();
  const { isDesktop } = useDeviceType();
  const currentPath = location.pathname;
  const menuList = [
    { label: "Home", url: "/anime" },
    { label: "Favourites", url: "/anime/favourites" },
  ];
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
        {isDesktop ? (
          <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
            {menuList.map((menu, i) => (
              <AWClickableText
                key={i}
                url={menu.url}
                text={menu.label}
                variant="h5"
                sx={{
                  color: currentPath === menu.url ? "#ff8c00" : "white",
                  cursor: "pointer",
                  fontFamily: "Quantico",
                  fontWeight: "bold",
                }}
              />
            ))}
          </Box>
        ) : (
          <HamburgerMenu menuList={menuList} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
