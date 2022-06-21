import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="layout__side">
        <img className="img--logo--small" alt="Logo-small" />
        <Link to={"/add-product"} className="btn btn--primary btn--s flex">
          <i className="icon icon--base icon--add icon--white ml--16"></i>
          <div className="ml--19">Add product</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
