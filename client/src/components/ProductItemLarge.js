import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { userContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { addProductToCart } from "../models/CartModel";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { addNewRating } from "../models/RatingModel";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function ProductItemLarge({ product, clicked, setClicked }) {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  const { signedInUser } = useContext(userContext);

  useEffect(() => {
    setValue(0);
  }, [value]);

  return (
    <>
      <Card elevation={5} sx={{ mt: 10, marginX: "1rem" }}>
        <CardMedia
          sx={{ height: 300, width: "100%" }}
          image={
            product.imageUrl ||
            `${process.env.PUBLIC_URL}/images/placeholder.png`
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
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
                let productId = product.id;
                addNewRating(productId, newValue);
                setClicked(true);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
        </CardActions>
      </Card>
      <Paper elevation={5} sx={{ margin: 2 }}>
        <Paper elevation={5} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontFamily: "Happy Monkey, cursive",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              fontSize: "2rem",
            }}
          >
            Ratings:
          </Typography>
        </Paper>
        <Grid container sx={{ mt: 1 }}>
          {product.ratings && product.ratings.length > 0 ? (
            product.ratings.map((rating) => (
              <Grid item key={`ratingId_${rating.id}`} xs={12} sm={12} md={3}>
                <Paper elevation={5} sx={{ margin: 1 }}>
                  <Rating
                    name="half-rating-read"
                    value={rating.rating}
                    readOnly
                  />
                  <Typography>{rating.createdAt}</Typography>
                </Paper>
              </Grid>
            ))
          ) : (
            <Typography>No ratings</Typography>
          )}
        </Grid>
      </Paper>
    </>
  );
}

export default ProductItemLarge;
