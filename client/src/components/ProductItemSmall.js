import "./ProductItemSmall.css";
import { userContext } from "../App";
import { useContext } from "react";

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
            if (signedInUser && signedInUser.carts.length > 0) {
              let cartId = signedInUser.carts[0].id;
              let userId = signedInUser.id;
              console.log(cartId, userId);
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
        <Rating name="read-only" value={5} readOnly />
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
