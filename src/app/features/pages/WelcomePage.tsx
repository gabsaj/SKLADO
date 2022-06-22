import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <img className="boxes__img" alt="boxes"></img>
      <img className="img--logo--small mt--32 ml--32" alt="logo" />
      <div className="title mt--32 type--montserrat">Welcome to Sklado!</div>
      <div className="type--nunito mt--16">Jump right in!</div>
      <Link className="btn btn--primary btn--m type--nunito" to={"/products"}>
        <div className="ml--16">VIEW PRODUCTS</div>
      </Link>
    </div>
  );
};

export default WelcomePage;
