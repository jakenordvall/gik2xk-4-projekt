import { Grid } from "@mui/material";

import { useEffect, useState } from "react";
import { getAll } from "../models/ProductModel";
import ProductItemSmallAdmin from "./ProductItemSmallAdmin";

function ProductListAdmin({ pathname }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  return (
    <Grid container>
      {products.map((product) => (
        <Grid item key={`productId_${product.id}`} xs={12} sm={12} md={3}>
          <ProductItemSmallAdmin product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductListAdmin;
