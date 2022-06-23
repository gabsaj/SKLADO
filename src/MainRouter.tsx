import { Routes, Route } from "react-router-dom";
import AddProduct from "./app/features/pages/AddProduct";
import EditProduct from "./app/features/pages/EditProduct";
import LandingPage from "./app/features/pages/LandingPage";
import ProductsPage from "./app/features/pages/ProductsPage";
import RegisterPage from "./app/features/pages/RegisterPage";
import WelcomePage from "./app/features/pages/WelcomePage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/welcome-page" element={<WelcomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product/:productId" element={<EditProduct />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default MainRouter;
