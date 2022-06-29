import logoS from "../../assets/images/logo-small.svg";

const Sidebar = () => {
  return (
    <div>
      <div className="layout__side">
        <img src={logoS} alt="Logo-small" />
        <button className="btn btn--add type--nunito type--nunito--wgt--semibold btn--s mt--80">
          <i className="icon icon--base icon--add icon--white ml--16 mt--8 mb--8"></i>
          <div className="ml--19 mr--80">Add product</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
