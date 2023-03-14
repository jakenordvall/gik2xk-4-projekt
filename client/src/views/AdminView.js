import ProductListAdmin from "../components/ProductListAdmin";
import { useLocation } from "react-router-dom";

function AdminView() {
  const location = useLocation();
  return <ProductListAdmin pathname={location.pathname} />;
}

export default AdminView;
