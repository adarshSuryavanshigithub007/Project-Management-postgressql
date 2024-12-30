import React from "react";
import DynamicForm from "../../components/forms/DynamicForm";
import AssignProjectJSON from "../../json/AssignNewProject.json";
const Projects = () => {
  // / Initialize state directly
  const elements = AssignProjectJSON[0] || {}; // Fallback to an empty object if JSON is empty

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
    <div>
      <div className="container m-3">
        <div className="row  d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="card">
              <h5 className="card-header bg-success text-white">{pageLabel}</h5>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {fields.map((field, i) => (
                    <DynamicForm
                      key={i}
                      field={field}
                      onChange={handleInputChange}
                    />
                  ))}
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
