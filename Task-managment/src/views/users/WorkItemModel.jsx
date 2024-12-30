import React from "react";
import DynamicForm from "../../components/forms/DynamicForm";
import AssignItemJSON from "../../json/AssignTaskDetails.json";
const Model = ({ onClose }) => {
  // / Initialize state directly
  const elements = AssignItemJSON[0] || {}; // Fallback to an empty object if JSON is empty

  // Destructure with safe fallback
  const pageLabel = elements.page_label || "No Label Available";
  const fields = elements.field || []; // Default to an empty array if `field` is undefined

  const handleInputChange = () => {
    console.log("Input changed");
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-xl border border-success"
        style={{ maxWidth: "1350px" }}
      >
        <div className="modal-content ">
          <div className="modal-header bg-success text-white text-center">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {pageLabel}
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {fields.map((field, i) => (
                  <div
                    className={`col-lg-${field.field_col || 6} mb-3`}
                    key={i}
                  >
                    <DynamicForm
                      key={i}
                      field={field}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>
              <div className="modal-footer d-flex justify-content-start">
                <button type="submit" className="btn btn-success">
                  Add Work Item
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
