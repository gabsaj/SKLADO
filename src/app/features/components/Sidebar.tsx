import logoS from "../../assets/images/logo-small.svg";

const Sidebar = () => {
  return (
    <div>
      <div className="layout__side">
        <img src={logoS} alt="Logo-small" />
        <button className="btn btn--primary type--nunito btn--s">
          <i className="icon icon--base icon--add icon--white ml--16"></i>
          <div className="ml--19">Add product</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
