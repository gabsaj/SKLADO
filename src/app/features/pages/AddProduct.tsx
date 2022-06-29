/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ProductForm from "../components/ProductForm";

const AddProducts = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="layout">
        <Sidebar />
        <div className="layout__main">
          <div className="title type--montserrat type--montserrat--wgt--semibold mt--32 ml--40">
            Add Product
          </div>
          <div
            onClick={() => navigate(-1)}
            className="btn flex type--nunito type--nunito--wgt--semibold ml--40 mt--32"
          >
            <i className="icon icon--base icon--back icon--blue"></i>
            <div>Back</div>
          </div>
          <ProductForm />
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
