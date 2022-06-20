const ProductsPage = () => {
  return (
    <div>
      <div className="layout">
        <div className="layout__side">
          <img className="img--logo--small" alt="Logo-small" />
          <button className="btn btn--primary btn--s py--10">
            <i className="icon icon--base icon--add icon--white ml--16"></i>
            <div className="ml--19">Add product</div>
          </button>
        </div>
        <div className="layout__main">
          <div className="title type--montserrat type--wgt--semibold mt--32 ml--24">
            Start adding products!
          </div>
          <div className="wrapper mr--24 mt--80">
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
                <th>
                  Barcode
                  <i className="icon icon--base icon--sort icon--grey"></i>
                </th>
                <th>
                  Name
                  <i className="icon icon--base icon--sort icon--grey"></i>
                </th>
                <th>
                  Quantity
                  <i className="icon icon--base icon--sort icon--grey"></i>
                </th>
              </tr>
              <tr>
                <td>12321123</td>
                <td>Veš mašina</td>
                <td>14</td>
                <td>
                  <i className="icon icon--base icon--edit"></i>
                </td>
                <td>
                  <i className="icon icon--base icon--delete"></i>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
