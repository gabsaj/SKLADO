import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import ProductService from "../../services/productService";

const ProductForm = () => {
  const [productBarcode, setProductBarcode] = useState<number>(0);
  const [productName, setProductName] = useState<string>("");
  const [productDetails, setProductDetails] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<number>(0);
  const [productId, setProductId] = useState<string>("");

  const productService = new ProductService();
  const params = useParams();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      if (params.productId) {
        const response = await productService.fetchProductById(
          params.productId
        );
        setProductBarcode(response.barcode);
        setProductName(response.name);
        setProductDetails(response.details);
        setProductQuantity(response.quantity);
        setProductId(response.id);
      }
    } catch (error) {
      toast.error("Failed to find a product.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
        transition: Flip,
        theme: "dark",
      });
    }
  };

  const handleSubmit = async () => {
    try {
      if (
        productBarcode > 0 &&
        productName !== "" &&
        productDetails !== "" &&
        productQuantity > 0
      ) {
        await productService.updateProduct(
          {
            barcode: productBarcode,
            name: productName,
            details: productDetails,
            quantity: productQuantity,
            id: productId,
          },
          productId
        );
        toast.success("Product edited.", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2500,
          transition: Flip,
          theme: "dark",
        });
      }
    } catch {
      toast.error("Failed to edit product.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        transition: Flip,
        theme: "dark",
      });
    }
  };

  const handleDelete = async () => {
    try {
      await productService.deleteProduct(productId);
      toast.success("Product deleted", {
        hideProgressBar: true,
        position: "top-center",
        autoClose: 2500,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Failed to delete product.", {
        hideProgressBar: true,
        position: "top-center",
        autoClose: 2500,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <form className="form">
        <div className="form__title">Add new product</div>
        <div className="form__field">
          <label htmlFor="barcode">Barcode</label>
          <input
            value={productBarcode ? productBarcode : ""}
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
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form__field">
          <label htmlFor="details">Details</label>
          <input
            value={productDetails}
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
            value={productQuantity ? productQuantity : ""}
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
          Save
        </button>
        <button
          onClick={() => {
            handleDelete();
            navigate(`/products`, { replace: true });
          }}
          className="btn btn--tertiary btn--l mt--16"
        >
          Delete product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
