import { useState } from "react";
import { Link } from "react-router-dom";
import boxes from "../../assets/images/boxes-login.svg";
import logoXs from "../../assets/images/logo--mini.svg";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <div>
      <div className="layout">
        <img src={boxes} className="half__boxes" alt="boxes"></img>
        <div className="layout__login">
          <div className="mt--80 ml--32">
            <div className="title type--montserrat type--montserrat--wgt--semibold ">
              Register
              <img
                src={logoXs}
                className="layout__logo-s ml--24"
                alt="logo"
              ></img>
            </div>
            <div className="layout__subtitle type--nunito mt--16">
              Register to manage your products
            </div>
          </div>
          <form className="form type--nunito">
            <div className="form__field">
              <label className="mb--8" htmlFor="full-name">
                Full Name*
              </label>
              <input
                required
                type="text"
                placeholder="Full Name"
                id="full-name"
                className="input input--primary"
              />
            </div>
            <div className="form__field">
              <label className="mb--8" htmlFor="email">
                Email*
              </label>
              <input
                required
                type="text"
                placeholder="mail@website.com"
                id="email"
                className="input input--primary"
              />
            </div>
            <div className="form__field">
              <label className="mb--8" htmlFor="username">
                Username*
              </label>
              <input
                required
                type="text"
                placeholder="Username"
                id="username"
                className="input input--primary"
              />
            </div>
            <div className="form__field">
              <label className="mb--8" htmlFor="password">
                Password*
              </label>
              <div className="input input--primary">
                <input
                  required
                  type={`${showPass ? "text" : "password"} `}
                  placeholder="********"
                  id="password"
                  className="input "
                />
                <i
                  onClick={() => setShowPass(!showPass)}
                  className="icon icon--base icon--show mr--19"
                ></i>
              </div>
            </div>
            <div className="form__field">
              <label className="mb--8" htmlFor="confirmPassword">
                Confirm Password*
              </label>
              <div className="input input--primary">
                <input
                  required
                  type={`${showPass ? "text" : "password"} `}
                  placeholder="********"
                  id="confirmPassword"
                  className="input "
                />
                <i
                  onClick={() => setShowPass(!showPass)}
                  className="icon icon--base icon--show mr--19"
                ></i>
              </div>
            </div>
            <button type="submit" className="btn btn--primary btn--l mt--32">
              Register
            </button>
            <div className="mt--16">
              Already have an account?
              <Link className="ml--8 form__link" to={"/"}>
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
