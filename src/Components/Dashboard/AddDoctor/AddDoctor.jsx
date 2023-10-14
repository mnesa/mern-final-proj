import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = () => {};
  return (
    <div className="signup ">
      <div className="form-parent ms-4 m-4">
        <h4 className="text-center">Add New Doctor</h4>
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

          <input type="submit" className="signup-btn mt-2" value="Add Doctor" />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
