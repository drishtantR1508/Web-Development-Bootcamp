import React from "react";

const Base = ({
  title = "Drishtant Store",
  description = "My Default Description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>If you got any questions, reach me out at Instagram</h4>
          <button className="btn btn-warning btn-lg">Contact Us</button>
          <div className="container-fluid">
            <span className="text-muted">
              An Amazing Django React FullStack Course
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;
