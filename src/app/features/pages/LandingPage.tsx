import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="type--nunito">
        Login<img className="img--logo--small"></img>
        <div className="type--nunito mt--16">Login to view your products</div>
      </div>
      <div className="type--nunito mt--32">
        <div>Email*</div>
        <input
          placeholder="mail@website.com"
          className="input input--primary"
        ></input>
      </div>
      <div className="type--nunito mt--32">
        <div>Password*</div>
        <input placeholder="********" className="input input--primary"></input>
      </div>
      <div className="type--nunito mt--4">Forgot password?</div>
      <Link to={"/welcome-page"} className="btn btn--primary btn--s">
        Login
      </Link>
    </div>
  );
};

export default LandingPage;
