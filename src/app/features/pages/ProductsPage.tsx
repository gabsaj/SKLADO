import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../services/productService";
import { Product } from "../../types/product";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const ProductsPage = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const productService = new ProductService();

  const fetchProducts = async () => {
    try {
      const response = await productService.getProducts();
      setProductsList(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleFilter = (value: Product) => {
    const filterSearch = () => {
      if (searchValue === "") {
        return value;
      } else if (
        value.name.toLowerCase().includes(searchValue) ||
        value.name.toUpperCase().includes(searchValue) ||
        value.name.includes(searchValue)
      )
        return value;
    };
    return filterSearch();
  };

  useEffect(() => {
    fetchProducts();
  }, []);
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
                onChange={(e) => handleSearch(e)}
                placeholder="Search"
                type="text"
                className="input input--secondary type--nunito ml--16"
              />
            </div>
            <Link
              to={"/add-product"}
              className="btn btn--secondary btn--s flex"
            >
              <i className="icon icon--base icon--add icon--white ml--16"></i>
              <div className="ml--19">Add product</div>
            </Link>
          </div>
          <div
            className="
          tablediv"
          >
            <table className="mt--80">
              <thead>
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
              </thead>
              <tbody>
                {productsList.length === 0 ? (
                  <tr>
                    <td>No products</td>
                  </tr>
                ) : (
                  productsList
                    .filter(handleFilter)
                    .map((product) => (
                      <Table key={product.id} product={product} />
                    ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
