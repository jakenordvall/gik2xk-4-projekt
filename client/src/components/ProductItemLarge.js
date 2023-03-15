import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { userContext } from "../App";
import { useContext } from "react";
import { addProductToCart } from "../models/CartModel";

function ProductItemLarge({ product }) {
  const { signedInUser } = useContext(userContext);
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
      <CardActions>
        <Button
          onClick={() => {
            if (signedInUser && signedInUser.cart) {
              let cartId = signedInUser.cart.id;
              let productId = product.id;
              addProductToCart({ cartId, productId }).then(() => {
                alert(`Product ${product.title} has been added to your cart`);
              });
            } else {
              alert("U have to log in");
            }
          }}
          fullWidth
          variant="contained"
          size="small"
          sx={{
            fontFamily: "Happy Monkey, cursive",
            fontWeight: "bold",
            background: "#efb8eb",
            ":hover": {
              background: "#d66dee",
            },
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductItemLarge;
