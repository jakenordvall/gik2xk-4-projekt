import ProductListAdmin from "../components/ProductListAdmin";
import { useLocation } from "react-router-dom";
import { Box, Container } from "@mui/system";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { create } from "../models/ProductModel";

function AdminView() {
  async function handleSubmit(event) {
    try {
      create(product).then(() => {
        alert("Product is added");
        setProduct(emptyProduct);
      });
    } catch (err) {
      console.log(err);
    }
  }
  const emptyProduct = {
    title: "",
    price: 0,
    description: "",
    imageUrl: "",
  };
  const [product, setProduct] = useState(emptyProduct);

  const location = useLocation();
  console.log(product);

  return (
    <>
      <Container maxWidth="100vh" sx={{ mt: 10 }}>
        <Grid container sx={{}}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{}}>
            <ProductListAdmin pathname={location.pathname} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mr: 5 }}
              position="fixed"
              top={"40%"}
              left="55%"
            >
              <Typography
                variant="h2"
                color="primary"
                sx={{
                  fontFamily: "Climate Crisis, cursive",
                  fontSize: 50,
                  background:
                    "linear-gradient(90deg,  	hsl(33, 100%, 53%) 0%, 	hsl(186, 100%, 69%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 5,
                }}
              >
                Add product to the catalog
              </Typography>
              <TextField
                value={product.title}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    title: e.target.value,
                  });
                }}
                sx={{ mb: 2 }}
                required
                fullWidth
                label="Title"
                autoFocus
              />
              <TextField
                value={product.price}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    price: e.target.value,
                  });
                }}
                sx={{ mb: 2, mt: 2 }}
                required
                fullWidth
                label="Price"
              />
              <TextField
                value={product.description}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    description: e.target.value,
                  });
                }}
                sx={{ mb: 2, mt: 2 }}
                required
                fullWidth
                label="Description"
              />
              <TextField
                value={product.imgUrl}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    imageUrl: e.target.value,
                  });
                }}
                sx={{ mb: 2, mt: 2 }}
                required
                fullWidth
                label="imageUrl"
              />
              <Button type="submit" variant="contained">
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AdminView;
