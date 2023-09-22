import React from "react";
// import "./SignUp.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="signup d-flex justify-content-center align-items-center">
      <div className="form-parent">
        <h4 className="text-center">LOGIN</h4>
        <form className="w-100">
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" />
          </div>
          <p>Forget Password ?</p>

          <input type="submit" className="signup-btn mt-2" value="LOGIN" />
          <p className="text-center mt-3">
            New to Doctor's Portal?
            <Link className="text-primare ms-2" to="/signup">
              Create new account.
            </Link>
          </p>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <span></span>
            <p className="m-3">OR</p>
            <span></span>
          </div>
          <button className="google-btn">CONTINUE WITH GOOGLE</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
