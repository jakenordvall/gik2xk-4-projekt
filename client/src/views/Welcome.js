import { useLottie } from "lottie-react";
import background_animation from "../resources/background_animation.json";
import { Container, Box, Typography, Button } from "@mui/material";
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
          sx={{ fontFamily: "Climate Crisis, cursive", fontSize: 100 }}
        >
          Welcome to our very cool donut shop
        </Typography>
        <Button variant="contained" size="large" sx={{ p: 2, mt: 3 }}>
          Explore the delicious donuts
        </Button>
      </Box>
    </Box>
  );
}
export default Welcome;
