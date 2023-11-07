import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = import.meta.env.VITE_image_bb_key;
  const navigate = useNavigate("/dashboard/manage-doctors");

  const {
    data: specialties,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          fetch("http://localhost:3000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`Doctor ${data.name} is Added Successfully`);
              navigate("/dashboard/manage-doctors");
            });
        }
      });
  };
  return (
    <div className="signup ">
      <div className="form-parent ms-4 m-4">
        <h4 className="text-center">Add New Doctor</h4>
        <form onSubmit={handleSubmit(handleAddDoctor)} className="w-100">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              {...register("name", { required: "Name is required." })}
              type="text"
              placeholder="Enter doctor Name"
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
              placeholder="Enter doctor Email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Specialty</label>
            <select
              className="form-select"
              {...register("specialty")}
              aria-label="Default select example"
            >
              {specialties?.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Upload Photo</label>
            <input
              {...register("image", {
                required: "true",
              })}
              type="file"
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
