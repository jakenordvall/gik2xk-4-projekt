import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  InputLabel,
} from "@mui/material";
import { update } from "../models/ProductModel";

import { Box } from "@mui/system";
import { useEffect, useState } from "react";

function EditProduct({ product, setRerender }) {
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await update(updatedProduct);
      setUpdatedProduct({ product });
      setRerender(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Card elevation={5} sx={{ mt: 10, marginX: "1rem" }}>
      <CardMedia
        sx={{ height: 300, width: "100%" }}
        image={
          product.imageUrl || `${process.env.PUBLIC_URL}/images/placeholder.png`
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mr: 5 }}
        top={"30%"}
        left="55%"
      >
        <TextField
          value={updatedProduct.title || ""}
          onChange={(e) => {
            setUpdatedProduct({
              ...updatedProduct,
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
          value={updatedProduct.price || 0}
          onChange={(e) => {
            setUpdatedProduct({
              ...updatedProduct,
              price: e.target.value,
            });
          }}
          sx={{ mb: 2 }}
          required
          fullWidth
          label="Price"
          autoFocus
        />
        <TextField
          value={updatedProduct.description || ""}
          onChange={(e) => {
            setUpdatedProduct({
              ...updatedProduct,
              description: e.target.value,
            });
          }}
          sx={{ mb: 2 }}
          required
          fullWidth
          label="Description"
          autoFocus
        />
        <TextField
          value={updatedProduct.imageUrl || ""}
          onChange={(e) => {
            setUpdatedProduct({
              ...updatedProduct,
              imageUrl: e.target.value,
            });
          }}
          sx={{ mb: 2 }}
          required
          fullWidth
          label="Image Url"
          autoFocus
        />

        <Button type="submit" variant="contained">
          Edit
        </Button>
      </Box>
    </Card>
  );
}

export default EditProduct;
