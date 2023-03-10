import ProductList from "../components/ProductList";
import { useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();

  return <ProductList pathname={location.pathname} />;
}
export default Products;
