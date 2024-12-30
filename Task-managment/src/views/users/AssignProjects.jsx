import React, { useState } from "react";
import Model from "./WorkItemModel";

const AssignProjects = () => {
  const [isOpen, setOpen] = useState(false); // State to control modal visibility

  const openModel = () => {
    setOpen(true); // Open the modal
  };

  const closeModel = () => {
    setOpen(false); // Close the modal
  };

  // Extract initials from card title
  const title = "Book Management";
  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div>
      {/* Card */}
      <div
        className="card m-3"
        style={{ maxWidth: "540px", cursor: "pointer" }}
        onClick={openModel}
      >
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div
              className="d-flex justify-content-center align-items-center rounded-circle"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#007bff",
                color: "white",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {initials}
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ marginBottom: "0" }}>
                {title}
              </h5>
              <span
                style={{ fontSize: "12px", marginTop: "0", display: "block" }}
              >
                Web application
              </span>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text d-flex gap-2">
                <small className="text-muted d-flex align-items-center">
                  <span
                    className="badge rounded-pill text-bg-warning"
                    style={{
                      fontSize: "12px",
                      padding: "5px 5px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "white",
                    }}
                  >
                    <i
                      className="fas fa-info-circle"
                      style={{ fontSize: "10px" }}
                    ></i>
                    View Details
                  </span>
                </small>
                <small className="text-muted">
                  Assign By: Adarsh Suryavanshi
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && <Model onClose={closeModel} />}
    </div>
  );
};

export default AssignProjects;
