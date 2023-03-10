import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getOne } from "../models/UserModel";

function LoginModal({ open, setOpen, signedIn, setSignedIn, user, setUser }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    getOne(userName).then((result) => {
      if (result) {
        if (result.firstName === userName && result.password === password) {
          setUser(result);
          setSignedIn(true);
        } else {
          alert("Password is wrong");
        }
      } else {
        alert("User not found");
      }
    });
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            sx={{ mb: 2 }}
            required
            fullWidth
            label="Name"
            autoFocus
          />
          <TextField
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
