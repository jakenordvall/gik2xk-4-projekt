import { Grid } from "@mui/material";

import { useEffect, useState } from "react";
import { getAll } from "../models/ProductModel";
import ProductItemSmallAdmin from "./ProductItemSmallAdmin";

function ProductListAdmin({ pathname }) {
  const [products, setProducts] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
    setClicked(false);
  }, [pathname, clicked]);

  return (
    <Grid container>
      {products.map((product) => (
        <Grid
          item
          key={`productId_${product.id}`}
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={4}
        >
          <ProductItemSmallAdmin product={product} setClicked={setClicked} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductListAdmin;
