/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import ProductService from "../../services/productService";
import { Product } from "../../types/product";

interface Props {
  product: Product;
  fetchProducts: () => void;
}

const TableRow: React.FC<Props> = (props) => {
  const { product, fetchProducts } = props;
  const productService = new ProductService();

  const handleDelete = async () => {
    debugger;
    try {
      await productService.deleteProduct(product.id);

      fetchProducts();
      toast.success("Product deleted.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        transition: Flip,
        theme: "dark",
      });
    } catch {
      toast.error("Failed delete product.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        transition: Flip,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <tr key={product.id}>
      <td className="pl--10 type--nunito type--nunito--wgt--light">
        {product.barcode}
      </td>
      <td className="pl--10  type--nunito type--nunito--wgt--semibold">
        {product.name}{" "}
      </td>
      <td className="pl--10 type--nunito type--nunito--wgt--regular">
        {product.quantity}
      </td>
      <td className="pl--10">
        <Link to={`/edit-product/${product.id}`}>
          <i className="icon icon--base icon--edit"></i>
        </Link>
      </td>
      <td>
        <i
          onClick={() => handleDelete()}
          className="icon icon--base icon--delete"
        ></i>
      </td>
    </tr>
  );
};

export default TableRow;
