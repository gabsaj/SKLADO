import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Flip, toast } from "react-toastify";
import halfBoxes from "../../assets/images/boxes-login.svg";
import logoXs from "../../assets/images/logo--mini.svg";

const LandingPage = () => {
  const [loginName, setLoginName] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      if (loginName !== "" && loginPassword !== "") {
        toast.success("Login succesful.", {
          position: "top-center",
          hideProgressBar: true,
          theme: "dark",
          transition: Flip,
          autoClose: 2500,
        });
        navigate("/welcome-page", { replace: true });
      }
    } catch (error) {
      toast.error("Login failed.", {
        position: "top-center",
        hideProgressBar: true,
        theme: "dark",
        transition: Flip,
        autoClose: 2500,
      });
    }
  };
  return (
    <div className="layout">
      <div>
        <img src={halfBoxes} alt="boxes" />
      </div>
      <div>
        <div className="mt--80 ml--32">
          <div className="title type--montserrat type--wgt-- ">
            Login<img src={logoXs} alt="logo"></img>
          </div>
          <div className="layout__subtitle type--nunito mt--16">
            Login to manage your products
          </div>
        </div>

        <form className="form type--nunito mt--40">
          <div className="form__field">
            <label htmlFor="email">Email*</label>
            <input
              required
              placeholder="email@webmail.com"
              type="text"
              id="email"
              className="input input--primary"
              onChange={(e) => setLoginName(e.target.value)}
            />
          </div>
          <div className="form__field">
            <label htmlFor="password">Password*</label>
            <input
              required
              placeholder="********"
              type="password"
              id="password"
              className="input input--primary"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <Link to={"/forgot-password"} className="form__link">
            Forgot your password?
          </Link>
          <button
            onClick={() => handleLogin()}
            type="submit"
            className="btn btn--primary btn--s my--32"
          >
            Login
          </button>
          <div>
            Don't have an account yet?
            <Link to={"/register"} className="form__link ml--8">
              Register here.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
