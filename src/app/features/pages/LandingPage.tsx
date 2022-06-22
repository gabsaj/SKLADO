import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Flip, toast } from "react-toastify";

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
        navigate("/welcome-page");
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
        <img className="boxes--login" alt="boxes" />
      </div>
      <div className="ml--32 pt--80">
        <div className="title type--nunito ">
          Login<img className="login--logo" alt="logo"></img>
        </div>
        <div className="type--nunito mt--16">Login to view your products</div>
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
          <div className="login__blue login__forgot">Forgot your password?</div>
          <button
            onClick={() => handleLogin()}
            type="submit"
            className="btn btn--primary btn--s my--32"
          >
            Login
          </button>
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
