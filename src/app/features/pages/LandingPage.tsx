import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="layout">
      <div>
        <img className="boxes--login" alt="boxes image" />
      </div>
      <div className="ml--32 pt--80">
        <div className="title type--nunito ">
          Login<img className="login--logo"></img>
        </div>
        <div className="type--nunito mt--16">Login to view your products</div>
        <form className="form type--nunito mt--40">
          <div className="form__field">
            <label htmlFor="email">Email*</label>
            <input
              placeholder="email@webmail.com"
              type="text"
              id="email"
              className="input input--primary"
            />
          </div>
          <div className="form__field">
            <label htmlFor="password">Password*</label>
            <input
              placeholder="********"
              type="password"
              id="password"
              className="input input--primary"
            />
          </div>
          <div className="login__blue login__forgot">Forgot your password?</div>
          <Link to={"/welcome-page"} className="btn btn--primary btn--s my--32">
            Login
          </Link>
          <div>
            Don't have an account yet?
            <div className="login__blue">Register here.</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
function useNavigate() {
  throw new Error("Function not implemented.");
}
