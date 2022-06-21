import { useEffect, useState } from "react";
import ProductService from "../../services/productService";
import { Product } from "../../types/product";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const ProductsPage = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);

  const itemService = new ProductService();

  const fetchProducts = async () => {
    try {
      const response = await itemService.getProducts();
      setProductsList(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(productsList);
  return (
    <div>
      <div className="layout">
        <Sidebar />
        <div className="layout__main">
          <div className="title type--montserrat type--montserrat--wgt--semibold mt--32 ml--24">
            Start adding products!
          </div>
          <div className="wrapper ml--80 mt--80">
            <div className="search__container mr--16">
              <i className="icon  icon--base icon--search ml--16"></i>
              <input
                placeholder="Search"
                type="text"
                className="input input--secondary type--nunito ml--16"
              />
            </div>
            <button className="btn btn--secondary btn--m px--16">
              <div>ADD PRODUCT</div>
              <i className="icon icon--base icon--plus icon--blue"></i>
            </button>
          </div>
          <div
            className="
          tablediv"
          >
            <table className="mt--80">
              <tr>
                <th className="pl--10">
                  Barcode
                  <i className="icon icon--base icon--sort icon--grey"></i>
                </th>
                <th className="pl--10">
                  Name
                  <i className="icon icon--base icon--sort icon--grey"></i>
                </th>
                <th className="pl--10">
                  Quantity
                  <i className="icon icon--base icon--sort icon--grey"></i>
                </th>
              </tr>

              {productsList.map((product) => (
                <Table product={product} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
