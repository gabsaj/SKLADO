import { Routes, Route } from "react-router-dom";
import AddProduct from "./app/features/pages/AddProduct";
import EditProduct from "./app/features/pages/EditProduct";
import ForgotPassword from "./app/features/pages/ForgotPassword";
import LoginPage from "./app/features/pages/LoginPage";
import ProductsPage from "./app/features/pages/ProductsPage";
import RegisterPage from "./app/features/pages/RegisterPage";
import WelcomePage from "./app/features/pages/WelcomePage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/welcome-page" element={<WelcomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit-product/:productId" element={<EditProduct />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default MainRouter;
