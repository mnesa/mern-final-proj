import React from "react";

const Loading = () => {
  return (
    <div className="vw-100 vh-100 d-flex justify-content-center align-items-center ">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
