import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../../services/productService";
import { v4 as id } from "uuid";
import { Flip, toast } from "react-toastify";
import Sidebar from "../components/Sidebar";

const AddProducts = () => {
  const [productBarcode, setProductBarcode] = useState<number>(0);
  const [productName, setProductName] = useState<string>("");
  const [productDetails, setProductDetails] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<number>(0);
  const productService = new ProductService();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (
        productBarcode > 0 &&
        productName !== "" &&
        productDetails !== "" &&
        productQuantity > 0
      ) {
        await productService.createProduct({
          barcode: productBarcode,
          name: productName,
          details: productDetails,
          quantity: productQuantity,
          id: id(),
        });
        toast.success("Product added.", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2500,
          transition: Flip,
          theme: "dark",
        });
      }
    } catch {
      toast.error("Failed to add product.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        transition: Flip,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <div className="layout">
        <Sidebar />
        <div className="layout__main">
          <div className="title type--montserrat mt--32 ml--40">
            Add Product
          </div>
          <div
            onClick={() => navigate(-1)}
            className="flex type--nunito ml--40 mt--32"
          >
            <i className="icon icon--base icon--back icon--blue"></i>
            <div>Back</div>
          </div>
          <form className="form">
            <div className="form__title">Add new product</div>
            <div className="form__field">
              <label htmlFor="barcode">Barcode</label>
              <input
                required
                type="number"
                placeholder="Barcode"
                id="barcode"
                className="input input--primary"
                onChange={(e) => setProductBarcode(Number(e.target.value))}
              />
            </div>
            <div className="form__field">
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                id="name"
                className="input input--primary"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="form__field">
              <label htmlFor="details">Details</label>
              <input
                required
                type="text"
                placeholder="Details"
                id="details"
                className="input input--primary"
                onChange={(e) => setProductDetails(e.target.value)}
              />
            </div>
            <div className="form__field">
              <label htmlFor="quantity">Quantity</label>
              <input
                required
                type="number"
                placeholder="0"
                id="quantity"
                className="input input--tertiary"
                onChange={(e) => setProductQuantity(Number(e.target.value))}
              />
            </div>
            <button
              type="submit"
              onClick={() => {
                handleSubmit();
                navigate(`/products`, { replace: true });
              }}
              className="btn btn--primary btn--l mt--80"
            >
              Add product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
