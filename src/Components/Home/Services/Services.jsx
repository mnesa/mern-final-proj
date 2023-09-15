import React from "react";
import fluoride from "../../../assets/images/fluoride 1.png";
import cavity from "../../../assets/images/cavity 1.png";
import whitening from "../../../assets/images/whitening 1.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Mnputrem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Pnputrem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Rnputrem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: whitening,
    },
  ];
  return (
    <div className="py-5 my-5 text-center">
      <h5 className="text-primare">OUR SERVICES</h5>
      <h2>Services We Provide</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4 mx-4 my-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
