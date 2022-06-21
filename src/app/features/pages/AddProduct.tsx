import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="title type--montserrat mt--32 ml--40">Add Product</div>
      <div
        onClick={() => navigate(-1)}
        className="flex type--nunito ml--40 mt--32"
      >
        <i className="icon icon--base icon--back icon--blue"></i>
        <div>Back</div>
      </div>
      <form className="form">
        <div className="form__title">Add new product</div>
        <div className="form__field">
          <label htmlFor="barcode">Barcode</label>
          <input
            type="number"
            placeholder="Barcode"
            id="barcode"
            className="input input--primary"
          />
        </div>
        <div className="form__field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="input input--primary"
          />
        </div>
        <div className="form__field">
          <label htmlFor="details">Details</label>
          <input
            type="text"
            placeholder="Details"
            id="details"
            className="input input--primary"
          />
        </div>
        <div className="form__field">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            placeholder="0"
            id="quantity"
            className="input input--tertiary"
          />
        </div>
        <button className="btn btn--primary btn--l mt--80">Add product</button>
      </form>
    </div>
  );
};

export default AddProducts;
