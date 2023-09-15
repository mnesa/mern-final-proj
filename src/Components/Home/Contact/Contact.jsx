import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="text-center text-white my-3">
        <h5 className="text-primare">Contact Us</h5>
        <h3>Stay connected with us</h3>
      </div>

      <div className="container mx-auto w-50 p-3">
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              aria-label="name"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Your message"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn-primare mt-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
