/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import Sidebar from "../components/Sidebar";

const EditProducts = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="layout">
        <Sidebar />
        <div className="layout__main">
          <div className="title type--montserrat mt--32 ml--40">
            Edit Product
          </div>
          <div
            onClick={() => navigate(-1)}
            className="flex type--nunito ml--40 mt--32"
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

export default EditProducts;
