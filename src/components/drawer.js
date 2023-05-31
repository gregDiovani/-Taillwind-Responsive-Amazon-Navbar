import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
       PaperProps={{
              sx: {
                backgroundColor: "black",
                color: "white"
              }
            }}
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText>
                <Link to="/login" style={{ textDecoration:"none" }}>
                    <div className="nav__item">
                        <span className="nav__itemLineOne">Hello Guest</span>
                        <span className="nav__itemLineTwo">Sign In</span>
                    </div>
                </Link>
                </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText >
              <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav__itemLineTwo nav__basketCount">0</span>
          </div>
        </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
      
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;