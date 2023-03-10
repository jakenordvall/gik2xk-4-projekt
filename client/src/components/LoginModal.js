import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getOne } from "../models/UserModel";

function LoginModal({ open, setOpen }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    const test = getOne(user)
      .then((result) => {
        if (result) {
          console.log(result);
        } else {
          console.log("User not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [user, setUser] = useState("");
  console.log(user);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          minWidth: "20rem",
          borderRadius: "0.5rem",
          padding: 3,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
          Logg in
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            sx={{ mb: 2 }}
            required
            fullWidth
            label="Name"
            autoFocus
          />
          <TextField
            sx={{ mb: 2, mt: 2 }}
            required
            fullWidth
            label="Password"
            type="password"
          />
          <Button type="submit" variant="contained">
            Log in
          </Button>
          <Button sx={{ ml: 1 }} onClick={() => setOpen(false)}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default LoginModal;
