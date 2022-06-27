import { Link } from "react-router-dom";
import halfBoxes from "../../assets/images/boxes-login.svg";
import logoXs from "../../assets/images/logo--mini.svg";

const ForgotPassword = () => {
  return (
    <div>
      <div className="layout">
        <img src={halfBoxes} className="layout__boxes--login" alt="boxes"></img>
        <div className="layout__main">
          <div className="mt--80 ml--32">
            <div className="title type--montserrat type--wgt-- ">
              Forgot password?
              <img src={logoXs} className="layout__logo-s" alt="logo"></img>
            </div>
            <div className="layout__subtitle type--nunito mt--16">
              Enter your email to reset your passsword
            </div>
          </div>
          <form className="form type--nunito">
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

            <button type="submit" className="btn btn--primary btn--l mt--80">
              Reset password
            </button>
            <div className="mt--16">
              <Link className="form__link" to={"/"}>
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
