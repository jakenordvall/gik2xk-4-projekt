import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

function ProductItemLarge({ product }) {
  return (
    <Card elevation={5} sx={{ marginTop: "1rem", marginX: "1rem" }}>
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
