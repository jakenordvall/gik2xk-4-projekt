import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getOne } from "../models/ProductModel";
import ProductItemLarge from "../components/ProductItemLarge";

function ProductDetail() {
  //Ta emot ett id för att hämta ett inlägg Products/:id

  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    getOne(productId).then((product) => setProduct(product));
    setClicked(false);
  }, [productId, clicked]);

  return (
    <>
      <ProductItemLarge
        product={product}
        clicked={clicked}
        setClicked={setClicked}
      />
    </>
  );
}

export default ProductDetail;
