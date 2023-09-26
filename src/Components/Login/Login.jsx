import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
// import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useContext(AuthContext);

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("Successfully Login!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="signup d-flex justify-content-center align-items-center">
      <div className="form-parent">
        <h4 className="text-center">LOGIN</h4>
        <form onSubmit={handleSubmit(handleLogin)} className="w-100">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="form-control"
            />
            {errors.email && (
              <p className="text-danger mt-1"> {errors.email.message} </p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="form-control"
            />
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
