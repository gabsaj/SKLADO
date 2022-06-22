import { Link } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import ProductService from "../../services/productService";
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

const Table: React.FC<Props> = (props) => {
  const { product } = props;
  const productService = new ProductService();

  const handleDelete = async () => {
    try {
      await productService.deleteProduct(product.id);

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

  return (
    <tr key={product.id}>
      <td className="pl--10">{product.barcode}</td>
      <td className="pl--10">{product.name} </td>
      <td className="pl--10">{product.quantity}</td>
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

export default Table;
