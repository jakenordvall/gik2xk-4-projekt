import "./ProductItemSmall.css";
import { remove } from "../models/ProductModel";
import AdminEditView from "../views/EditView";

import {
  Card,
  Typography,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProductItemSmallAdmin({ product, setClicked }) {
  function handleClick() {
    remove(product.id);
    setClicked(true);
  }

  return (
    <Card elevation={10} sx={{ marginTop: "1rem", marginX: "1rem" }}>
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
          product.imageUrl || `${process.env.PUBLIC_URL}/images/placeholder.png`
        }
        alt={`bild till ${product.title}`}
        height="200"
      ></CardMedia>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={() => handleClick()}
          variant="contained"
          size="large"
          sx={{
            fontFamily: "Happy Monkey, cursive",
            fontWeight: "bold",
            background: "#f89b29",
            ":hover": {
              background: "#ff0f7b",
            },
          }}
        >
          Remove
        </Button>
        <Link to={`/products/edit/${product.id}`}>
          <Button
            variant="contained"
            size="large"
            sx={{
              fontFamily: "Happy Monkey, cursive",
              fontWeight: "bold",
              background: "#60efff",
              ":hover": {
                background: "#0061ff",
              },
            }}
          >
            Edit
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ProductItemSmallAdmin;
