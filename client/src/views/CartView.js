import Button from "@mui/material/Button";
import { userContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { Container } from "@mui/system";
import { getCartById } from "../models/CartModel";

function CartView() {
  const { signedInUser } = useContext(userContext);
  const [cart, setCart] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (signedInUser && signedInUser.cart) {
      let cartId = signedInUser.cart.id;
      getCartById(cartId).then((result) => {
        setCart(result);
        setCartProducts(result.products);
      });
    }
  }, [signedInUser]);

  return (
    <>
      <Container sx={{ mt: 50 }} maxWidth="false">
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <h1 key={product.id}>
              {product.title} quantity {product.shoppingCartRow.quantity}
            </h1>
          ))
        ) : (
          <h1>You have to log in</h1>
        )}
      </Container>
    </>
  );
}

export default CartView;
