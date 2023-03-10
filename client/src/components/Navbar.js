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

import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  console.log(user);
  //admin state
  if (signedIn && user.admin === true) {
    return (
      <>
        <Box>
          <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
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
              <IconButton aria-label="cart" sx={{ mr: 2 }}>
                <ShoppingCartIcon />
              </IconButton>
              <Button
                onClick={() => setSignedIn(false)}
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
                Logut
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
              <IconButton aria-label="cart" sx={{ mr: 2 }}>
                <ShoppingCartIcon />
              </IconButton>
              <Button
                onClick={() => setSignedIn(false)}
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
