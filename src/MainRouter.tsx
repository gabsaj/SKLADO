import { Routes, Route } from "react-router-dom";
import AddProducts from "./app/features/pages/AddProducts";
import EditProducts from "./app/features/pages/EditProducts";
import LandingPage from "./app/features/pages/LandingPage";
import ProductsPage from "./app/features/pages/ProductsPage";
import WelcomePage from "./app/features/pages/WelcomePage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/welcome-page" element={<WelcomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/add-products" element={<AddProducts />} />
      <Route path="/edit-products" element={<EditProducts />} />
    </Routes>
  );
};

export default MainRouter;
