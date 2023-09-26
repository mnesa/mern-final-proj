import React, { useContext } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("Successfully User Created.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="signup d-flex justify-content-center align-items-center">
      <div className="form-parent">
        <h4 className="text-center">Sign Up</h4>
        <form onSubmit={handleSubmit(handleSignUp)} className="w-100">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              {...register("name", { required: "Name is required." })}
              type="text"
              className="form-control"
            />
            {errors.name && (
              <p className="text-danger"> {errors.name.message} </p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              {...register("email", {
                required: "true",
              })}
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters.",
                },
                pattern: {
                  value: /[A-Z]/,
                  message: "One capital letter must.",
                },
              })}
              type="password"
              className="form-control"
            />
            {errors.password && (
              <p className="text-danger mt-1"> {errors.password.message} </p>
            )}
          </div>

          <input type="submit" className="signup-btn mt-2" value="Sign Up" />
          <p className="text-center mt-3">
            Already have an account?
            <Link className="text-primare" to="/login">
              Please Login
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

export default SignUp;
