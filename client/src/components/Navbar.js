import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginModal from "./LoginModal";

import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [userState, setUserState] = useState("");

  return (
    <>
      <Box>
        <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: "Climate Crisis, cursive",
                    color: "black",
                    fontSize: 20,
                  }}
                >
                  Donuts and friends
                </Typography>
              </Link>
            </Box>
            <IconButton aria-label="cart" sx={{ mr: 2 }}>
              <ShoppingCartIcon />
            </IconButton>
            <Button
              onClick={() => setOpen(true)}
              sx={{
                backgroundColor: "#efb8eb",
                ":hover": {
                  background: "#d66dee",
                },
                color: "black",
                fontWeight: "bold",
                mr: 2,
              }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <LoginModal open={open} setOpen={setOpen}></LoginModal>
    </>
  );
}

export default Navbar;
