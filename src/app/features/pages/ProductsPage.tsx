/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import ProductService from "../../services/productService";
import { Product } from "../../types/product";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import TableRow from "../components/TableRow";

const ProductsPage = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [params, setParams] = useState({ page: 1, rpp: 10 });
  const [count, setCount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const productService = new ProductService();

  const handlePaginate = (pageNumber: number) => {
    setParams({ page: pageNumber, rpp: params.rpp });
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productService.getProducts(
        params.page,
        params.rpp,
        sortBy,
        sortDirection
      );
      setCount(response.headers);
      setProductsList(response.data);
      setLoading(true);
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

  useEffect(() => {
    fetchProducts();
  }, [sortBy, params.page, params.rpp, sortDirection]);

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
                    <td className="pl--10 type--nunito type--nunito--wgt--light">
                      No products
                    </td>
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
            <div className="wrapper__pages">
              <Pagination
                productsCount={Number(count)}
                currentPage={params.page}
                rpp={params.rpp}
                handlePaginate={handlePaginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
