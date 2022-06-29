/* eslint-disable react-hooks/exhaustive-deps */
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
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [formState, setFormState] = useState<string>("");

  const switchForm = () => {
    switch (window.location.pathname) {
      case "/add-product":
        setFormState("addProduct");
        break;
    }
  };

  const switchButtons = () => {
    if (formState === "addProduct") {
      return (
        <input
          type="button"
          value="ADD PRODUCT"
          className="btn btn--primary btn--l mt--80"
          onClick={() => {
            handleSubmitAdd();
          }}
        ></input>
      );
    } else {
      return (
        <div className="wrapper__edit">
          <input
            value="Save"
            type="button"
            onClick={() => {
              handleSubmitEdit();
            }}
            className="btn btn--primary btn--l mt--80"
          ></input>
          <button
            onClick={() => {
              handleDelete();
            }}
            className="btn btn--tertiary btn--l mt--16"
          >
            Delete product
          </button>
        </div>
      );
    }
  };

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
        theme: "colored",
      });
    }
  };

  const handleSubmitEdit = async () => {
    try {
      if (
        productBarcode > 0 &&
        productName !== "" &&
        productQuantity > 0 &&
        isChanged === true
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
          theme: "colored",
        });
        navigate(`/products`, { replace: true });
      }
    } catch {
      toast.error("Failed to edit product.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        transition: Flip,
        theme: "colored",
      });
    }
  };
  const handleSubmitAdd = async () => {
    try {
      if (
        productBarcode > 0 &&
        productName !== "" &&
        productQuantity > 0 &&
        isChanged === true
      ) {
        await productService.createProduct({
          barcode: productBarcode,
          name: productName,
          details: productDetails,
          quantity: productQuantity,
          id: productId,
        });
        toast.success("Product added.", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2500,
          transition: Flip,
          theme: "colored",
        });
        navigate(`/products`, { replace: true });
      }
    } catch {
      toast.error("Failed to edit product.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        transition: Flip,
        theme: "colored",
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
        theme: "colored",
      });
      navigate(`/products`, { replace: true });
      fetchProduct();
    } catch (error) {
      toast.error("Failed to delete product.", {
        hideProgressBar: true,
        position: "top-center",
        autoClose: 2500,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    fetchProduct();
    switchForm();
  }, []);

  return (
    <div>
      <form className="form type--nunito">
        <div className="form__title type--nunito type--nunito--wgt--semibold">
          Edit product
        </div>
        <div className="form__field">
          <label htmlFor="barcode">Barcode</label>
          <input
            value={productBarcode ? productBarcode : ""}
            required
            type="number"
            placeholder="Barcode"
            id="barcode"
            className="input input--primary"
            onChange={(e) => {
              setProductBarcode(Number(e.target.value));
              setIsChanged(true);
            }}
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
            onChange={(e) => {
              setProductName(e.target.value);
              setIsChanged(true);
            }}
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
            onChange={(e) => {
              setProductDetails(e.target.value);
              setIsChanged(true);
            }}
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
            onChange={(e) => {
              setProductQuantity(Number(e.target.value));
              setIsChanged(true);
            }}
          />
        </div>

        {switchButtons()}
      </form>
    </div>
  );
};

export default ProductForm;
