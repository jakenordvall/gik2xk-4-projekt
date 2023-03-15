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

import EditIcon from "@mui/icons-material/Edit";

import { useEffect, useState } from "react";
import { createCart } from "../models/CartModel";

function Navbar({ setSignedInUser }) {
  const [open, setOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setSignedInUser(user);

    if (user && !user.cart) {
      createCart(user.id);
      console.log("created cart");
    }
  }, [user]);

  //admin state
  if (signedIn && user.admin === true) {
    return (
      <>
        <Box>
          <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
            <Toolbar>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link to="/adminView">
                  <EditIcon
                    fontSize="large"
                    sx={{
                      mr: 3,
                      color: "#efb8eb",
                      ":hover": {
                        color: "#d66dee",
                      },
                    }}
                  />
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontFamily: "Climate Crisis, cursive",
                      color: "black",
                      fontSize: 20,
                      ":hover": {
                        fontSize: 25,
                      },
                    }}
                  >
                    Donuts and friends
                  </Typography>
                </Link>
              </Box>
              <Link
                to={`carts/${user.cart ? user.cart.id : ""}`}
                style={{ textDecoration: "none" }}
              >
                <IconButton aria-label="cart" sx={{ mr: 2 }}>
                  <ShoppingCartIcon />
                </IconButton>
              </Link>
              <Button
                onClick={() => {
                  setSignedIn(false);
                  setSignedInUser(null);
                }}
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
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    );
    // customer state
  } else if (signedIn) {
    return (
      <>
        <Box>
          <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
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
              <Link
                to={`carts/${user.cart ? user.cart.id : ""}`}
                style={{ textDecoration: "none" }}
              >
                <IconButton aria-label="cart" sx={{ mr: 2 }}>
                  <ShoppingCartIcon />
                </IconButton>
              </Link>
              <Button
                onClick={() => {
                  setSignedIn(false);
                  setSignedInUser({});
                }}
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
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    );
    //intiall state
  } else if (signedIn === false) {
    return (
      <>
        <Box>
          <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
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
        <LoginModal
          open={open}
          setOpen={setOpen}
          signedIn={signedIn}
          setSignedIn={setSignedIn}
          user={user}
          setUser={setUser}
        ></LoginModal>
      </>
    );
  }
}

export default Navbar;
