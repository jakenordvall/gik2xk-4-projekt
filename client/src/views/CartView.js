import { Avatar, Grid, Paper, Typography, Box, Button } from "@mui/material";
import { userContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { deleteCartProduct, getCartById } from "../models/CartModel";

function CartView() {
  const { signedInUser } = useContext(userContext);
  const [cart, setCart] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (signedInUser && signedInUser.cart) {
      let cartId = signedInUser.cart.id;
      getCartById(cartId).then((result) => {
        setCart(result);
        setCartProducts(result.products);
        setClicked(false);
      });
    } else {
      setCartProducts(null);
      setClicked(false);
    }
  }, [signedInUser, clicked]);

  return (
    <Grid container sx={{ mt: 10 }}>
      <Paper sx={{ width: "100%", marginX: 5 }}>
        <Grid>
          <Paper
            elevation={5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              sx={{
                fontFamily: "Happy Monkey, cursive",
                fontWeight: "bold",
                fontSize: "3rem",
              }}
            >
              {signedInUser ? `${signedInUser.firstName}'s cart` : "Cart"}
            </Typography>
          </Paper>
        </Grid>
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <Grid
              item
              key={`productId_${product.id}`}
              sx={{ marginX: 2, marginY: 1 }}
              xs={12}
              sm={12}
              md={12}
            >
              <Paper
                elevation={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingX: 2,
                }}
              >
                <Avatar
                  src={product.imageUrl}
                  sx={{ width: 100, height: 100 }}
                ></Avatar>
                <Typography
                  sx={{
                    fontFamily: "Happy Monkey, cursive",
                    fontWeight: "bold",
                    fontSize: "2rem",
                  }}
                >
                  {product.title}
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Happy Monkey, cursive",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    Quantity: {product.shoppingCartRow.quantity}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Happy Monkey, cursive",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    Price: {product.shoppingCartRow.quantity * product.price}
                  </Typography>
                </Box>
                <Button
                  onClick={() => {
                    let cartId = cart.id;
                    let productId = product.id;
                    deleteCartProduct({ cartId, productId });
                    setClicked(true);
                  }}
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
              </Paper>
            </Grid>
          ))
        ) : !cartProducts ? (
          <h1>You have to log in</h1>
        ) : !signedInUser ? (
          <h1>Cart empty</h1>
        ) : (
          <h1>Cart Empty</h1>
        )}
        <Grid>
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: 2,
              paddingX: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Happy Monkey, cursive",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              {signedInUser ? `Total: ${cart.total} SEK` : "Total: 0 SEK"}
            </Typography>
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
              Checkout
            </Button>
          </Paper>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default CartView;
