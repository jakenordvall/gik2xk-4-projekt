import "./ProductItemSmall.css";
import { userContext } from "../App";
import { useContext } from "react";
import ProductRating from "./ProductRating";

import {
  Card,
  Typography,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";
import { addProductToCart } from "../models/CartModel";

function ProductItemSmall({ product }) {
  const { signedInUser } = useContext(userContext);
  return (
    <Card elevation={10} sx={{ marginTop: "1rem", marginX: "1rem" }}>
      <Link to={`/products/${product.id}`}>
        <CardHeader
          title={
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontFamily: "Happy Monkey, cursive",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {product.title}
            </Typography>
          }
        />
        <CardMedia
          component="img"
          image={
            product.imageUrl ||
            `${process.env.PUBLIC_URL}/images/placeholder.png`
          }
          alt={`bild till ${product.title}`}
          height="200"
        ></CardMedia>
      </Link>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
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
        <ProductRating rating={product.ratings} />
        <Typography
          sx={{
            fontFamily: "Happy Monkey, cursive",
            fontWeight: "bold",
          }}
        >
          Price: {product.price}kr
        </Typography>
      </CardActions>
    </Card>
  );
}

export default ProductItemSmall;
