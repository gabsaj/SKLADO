import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <img className="boxes__img"></img>
      <img className="img--logo--small mt--32 ml--32" />
      <div className="title mt--32 type--montserrat">Welcome to Sklado!</div>
      <div className="type--nunito mt--16">Jump right in!</div>
      <Link className="btn btn--primary btn--s type--nunito" to={"/products"}>
        <div className="ml--16">VIEW PRODUCTS</div>
        <i className="icon icon--base icon--arrow icon--white ml--24"></i>
      </Link>
    </div>
  );
};

export default WelcomePage;
