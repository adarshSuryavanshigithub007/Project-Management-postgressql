import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const TaskManagement = () => {
  return (
    <div>
      <div className="container">
        <div className="row text-center mt-5 justify-content-center">
          {/* To-Do Column */}
          <div
            className="col-3 me-2"
            style={{
              backgroundColor: "#f8d7da", // Light red background for To-Do
              height: "auto",
              borderRight: "1px solid #000", // Vertical line on the right
            }}
          >
            <h6 className="mt-2">To-Do</h6>
            {/* Card Inside To-Do */}
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Task 1</h5>
                <p className="card-text">This is a description of Task 1.</p>
                <a href="#" className="btn btn-primary btn-sm">
                  View Details
                </a>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Task 2</h5>
                <p className="card-text">This is a description of Task 2.</p>
                <a href="#" className="btn btn-primary btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Progress Column */}
          <div
            className="col-3 me-2 "
            style={{
              backgroundColor: "#fff3cd", // Light yellow background for Progress
              height: "auto",
              borderRight: "1px solid #000", // Vertical line on the right
            }}
          >
            <h6 className="mt-2">Progress</h6>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Task 1</h5>
                <p className="card-text">This is a description of Task 1.</p>
                <a href="#" className="btn btn-primary btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Complete Column */}
          <div
            className="col-3"
            style={{
              backgroundColor: "#d4edda", // Light green background for Complete
              height: "auto",
            }}
          >
            <h6 className="mt-2"> Complete</h6>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Task 1</h5>
                <p className="card-text">This is a description of Task 1.</p>
                <a href="#" className="btn btn-primary btn-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
