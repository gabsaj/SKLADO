import { Link } from "react-router-dom";
import halfBoxes from "../../assets/images/boxes-login.svg";
import logoXs from "../../assets/images/logo--mini.svg";

const RegisterPage = () => {
  return (
    <div>
      <div className="layout">
        <img src={halfBoxes} className="layout__boxes--login" alt="boxes"></img>
        <div className="layout__main">
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
              <label htmlFor="full-name">Full Name*</label>
              <input
                required
                type="number"
                placeholder="Full Name"
                id="full-name"
                className="input input--primary"
              />
            </div>
            <div className="form__field">
              <label htmlFor="email">Email*</label>
              <input
                required
                type="text"
                placeholder="mail@website.com"
                id="email"
                className="input input--primary"
              />
            </div>
            <div className="form__field">
              <label htmlFor="username">Username*</label>
              <input
                required
                type="text"
                placeholder="Username"
                id="username"
                className="input input--primary"
              />
            </div>
            <div className="form__field">
              <label htmlFor="passwordi999">Password*</label>
              <div className="input input--primary">
                <input
                  required
                  type="password"
                  placeholder="********"
                  id="password"
                  className="input "
                />
                <i className="icon icon--base icon--show mr--19"></i>
              </div>
            </div>
            <div className="form__field">
              <label htmlFor="quantity">Confirm Password*</label>
              <div className="input input--primary">
                <input
                  required
                  type="password"
                  placeholder="********"
                  id="quantity"
                  className="input "
                />
                <i className="icon icon--base icon--show mr--19"></i>
              </div>
            </div>
            <button type="submit" className="btn btn--primary btn--l mt--80">
              Register
            </button>
            <div>
              Already have an account?{" "}
              <Link className="form__link" to={"/"}>
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
