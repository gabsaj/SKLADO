import { Link } from "react-router-dom";
import logoL from "../../assets/images/logo-large.svg";
import boxesL from "../../assets/images/boxes.svg";

const WelcomePage = () => {
  return (
    <div>
      <img src={boxesL} className="boxes__img" alt="boxes"></img>
      <img src={logoL} className="mt--80 ml--80" alt="logo" />
      <div className="mt--80 ml--80 wrapper__welcome">
        <div className="title type--montserrat type--montserrat--wgt--semibold ">
          Welcome to SKLADO!
        </div>
        <div className="layout__subtitle type--nunito mt--24">
          Jump right in!
        </div>
        <Link
          className="btn btn--primary btn--m type--nunito type--nunito--wgt--semibold mr--64 mt--32"
          to={"/products"}
        >
          <div className="">VIEW PRODUCTS</div>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
