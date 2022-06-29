/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import ProductService from "../../services/productService";
import { Product } from "../../types/product";
import Sidebar from "../components/Sidebar";
import TableRow from "../components/TableRow";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const navigate = useNavigate();

  const productService = new ProductService();

  const fetchProducts = async () => {
    try {
      const response = await productService.getProducts(sortBy, sortDirection);
      setProductsList(response);
    } catch (error) {
      toast.error("Failed to get products", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        transition: Flip,
        theme: "colored",
      });
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

  const handleSort = (sortBy: string) => {
    if (sortDirection === "") {
      setSortDirection("asc");
    }
    if (sortDirection === "asc") {
      setSortDirection("desc");
    }
    if (sortDirection === "desc") {
      setSortDirection("");
    }
    setSortBy(sortBy);
  };

  const logOut = () => {
    toast.success("Logged out", {
      position: "top-center",
      hideProgressBar: true,
      autoClose: 2500,
      theme: "colored",
      transition: Flip,
    });
    navigate("/");
  };

  useEffect(() => {
    fetchProducts();
  }, [sortDirection]);
  return (
    <div>
      <div className="layout">
        <Sidebar />
        <div className="layout__main">
          <div className="title type--montserrat type--montserrat--wgt--semibold mt--32 ml--24">
            Start adding products!
          </div>
          <div className="wrapper__products type--nunito mr--32 mt--80">
            <div className="search__container mr--16 input input--secondary">
              <i className="icon  icon--base icon--search ml--16"></i>
              <input
                onChange={(e) => handleSearch(e)}
                placeholder="Search"
                type="text"
                className="input ml--16"
              />
            </div>
            <Link
              to={"/add-product"}
              className="btn btn--secondary btn--s flex"
            >
              <div className="ml--19">ADD PRODUCT</div>
              <i className="icon icon--base icon--plus icon--blue ml--16"></i>
            </Link>
            <button
              onClick={logOut}
              className="btn btn--primary btn--m flex ml--16"
            >
              LOG OUT
            </button>
          </div>
          <div>
            <table className="mt--80 mb--80 type--nunito">
              <thead>
                <tr>
                  <th
                    className="pl--10"
                    onClick={() => {
                      handleSort("barcode");
                    }}
                  >
                    Barcode
                    <i
                      className={`icon icon--base icon--sort ${
                        sortBy === "barcode" ? "icon--blue" : " icon--grey"
                      } `}
                    ></i>
                  </th>
                  <th className="pl--10" onClick={() => handleSort("name")}>
                    Name
                    <i
                      className={`icon icon--base icon--sort ${
                        sortBy === "name" ? "icon--blue" : " icon--grey"
                      } `}
                    ></i>
                  </th>
                  <th className="pl--10" onClick={() => handleSort("quantity")}>
                    Quantity
                    <i
                      className={`icon icon--base icon--sort ${
                        sortBy === "quantity" ? "icon--blue" : " icon--grey"
                      } `}
                    ></i>
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
                      <TableRow
                        key={product.id}
                        product={product}
                        fetchProducts={() => fetchProducts()}
                      />
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
