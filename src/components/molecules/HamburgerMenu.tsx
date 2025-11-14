import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AWButton from "../atoms/Button/AWButton";
import { useNavigation } from "../../hooks/useNavigation";
import { useLocation } from "react-router-dom";

type MenuType = {
  label: string;
  url?: string;
};

type HamburgerMenuPropsType = {
  menuList: MenuType[];
};

const HamburgerMenu = ({ menuList }: HamburgerMenuPropsType) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { clickToNavigate } = useNavigation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <AWButton
        isIconButton={true}
        label={<MenuIcon />}
        onClick={() => setOpen(!open)}
      />

      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <List sx={{ minWidth: "40vw" }}>
          {menuList.map((menu, i) => (
            <ListItem key={i}>
              <ListItemButton
                onClick={() => {
                  if (menu.url) clickToNavigate(menu.url);
                  toggleDrawer();
                }}
              >
                <ListItemText
                  disableTypography
                  primary={menu.label}
                  sx={{
                    color: currentPath === menu.url ? "#ff8c00" : "white",
                    cursor: "pointer",
                    fontFamily: "Quantico",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
