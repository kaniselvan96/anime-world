import { AppBar, Toolbar } from "@mui/material";
import AWText from "../atoms/Text/AWText";

const Footer = () => {
  const text = (
    <span>
      Developed By{" "}
      <a
        href="https://github.com/kaniselvan96"
        style={{
          background: "linear-gradient(90deg, #ff0080, #ff8c00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Kani Selvan
      </a>
    </span>
  );
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1e1e2f", marginTop: 10, alignItems: "center" }}
    >
      <Toolbar>
        <AWText
          text={text}
          variant="body2"
          sx={{ fontFamily: "'Press Start 2P', cursive" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
