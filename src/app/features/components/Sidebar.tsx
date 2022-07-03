import logoS from "../../assets/images/logo-small.svg";
import { useNavigate } from "react-router-dom";
import { toast, Flip } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();
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
  return (
    <div>
      <div className="layout__side">
        <img src={logoS} alt="Logo-small" />
        <button className="btn btn--add type--nunito type--nunito--wgt--semibold btn--s mt--80">
          <i className="icon icon--base icon--add icon--white ml--16 mt--8 mb--8"></i>
          <div className="ml--19 mr--80">Add product</div>
        </button>
        <button onClick={logOut} className="btn btn--tertiary btn--m mt--88">
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
