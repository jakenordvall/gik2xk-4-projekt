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

function EditProduct({ product }) {
  const [updatedProduct, setUpdatedProduct] = useState({ product });
  useEffect(() => {
    setUpdatedProduct(product);
  });

  console.log(updatedProduct);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await update(updatedProduct);
      setUpdatedProduct(product);
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
          value={updatedProduct.title}
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
          helperText={product.title}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button type="submit" variant="contained">
          Edit
        </Button>
      </Box>
    </Card>
  );
}

export default EditProduct;
