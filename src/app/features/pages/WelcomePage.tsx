import { Link } from "react-router-dom";
import logoL from "../../assets/images/logo-large.svg";
import boxesL from "../../assets/images/boxes.svg";

const WelcomePage = () => {
  return (
    <div>
      <img src={boxesL} className="boxes__img" alt="boxes"></img>
      <img src={logoL} className="mt--80 ml--80" alt="logo" />
      <div className="mt--80 ml--80 wrapper__welcome">
        <div className="title type--montserrat type--wgt-- ">
          Welcome to SKLADO
        </div>
        <div className="layout__subtitle type--nunito mt--16">
          Login to view your products
        </div>
        <Link
          className="btn btn--primary btn--m type--nunito mr--64 mt--16"
          to={"/products"}
        >
          <div className="">VIEW PRODUCTS</div>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
