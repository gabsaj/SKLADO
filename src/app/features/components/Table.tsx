import { Product } from "../../types/product";

interface Props {
  product: Product;
}

const Table: React.FC<Props> = (props) => {
  const { product } = props;
  return (
    <div>
      <tr>
        <td className="pl--10">{product.barcode}</td>
        <td className="pl--10">{product.name} </td>
        <td className="pl--10">{product.quantity}</td>
        <td className="pl--10">
          <i className="icon icon--base icon--edit"></i>
        </td>
        <td>
          <i className="icon icon--base icon--delete"></i>
        </td>
      </tr>
    </div>
  );
};

export default Table;
