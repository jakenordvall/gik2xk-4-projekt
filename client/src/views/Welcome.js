import { useLottie } from "lottie-react";
import background_animation from "../resources/background_animation.json";
import { Container, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const options = {
    animationData: background_animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <Box sx={{ position: "relative" }}>
      <Container maxWidth={false} sx={{ height: "100vh", width: "100vw" }}>
        {View}
      </Container>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          color="primary"
          sx={{
            fontFamily: "Climate Crisis, cursive",
            fontSize: 100,
            background:
              "linear-gradient(90deg,  hsla(305, 64%, 83%, 1) 50%, hsla(289, 79%, 68%, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to our very cool donut shop
        </Typography>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              p: 2,
              mt: 3,
              fontFamily: "Happy Monkey, cursive",
              fontWeight: "bold",
              background: "#efb8eb",
              ":hover": {
                background: "#d66dee",
              },
            }}
          >
            Explore delicious donuts
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
export default Welcome;
