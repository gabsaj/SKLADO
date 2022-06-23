import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <div className="layout">
        <img className="layout__boxes--login" alt="boxes"></img>
        <div className="layout__main">
          <div className="mt--80 ml--32">
            <div className="title type--montserrat type--wgt-- ">
              Register<img className="layout__logo-s" alt="logo"></img>
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
              <input
                required
                type="password"
                placeholder="********"
                id="password"
                className="input input--primary"
              />
            </div>
            <div className="form__field">
              <label htmlFor="quantity">Confirm Password*</label>
              <input
                required
                type="password"
                placeholder="********"
                id="quantity"
                className="input input--primary"
              />
            </div>
            <div>
              Already have an account?{" "}
              <Link className="form__link" to={"/"}>
                Login here
              </Link>
            </div>
            <button type="submit" className="btn btn--primary btn--l mt--80">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
