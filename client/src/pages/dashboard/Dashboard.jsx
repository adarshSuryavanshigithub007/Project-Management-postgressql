import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faTasks,
  faCheckCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <div className="row g-3">
        {/* Project Tile */}
        <div className="col-md-3">
          <div
            className="p-4 text-white rounded shadow-sm hover-shadow"
            style={{ backgroundColor: "#FFB3B3", cursor: "pointer" }}
          >
            <h5>
              <FontAwesomeIcon icon={faProjectDiagram} className="me-2" />
              Project
            </h5>
            <p className="h4">15</p> {/* Example project count */}
            <small>Active Projects</small>
          </div>
        </div>

        {/* Total Tasks Tile */}
        <div className="col-md-3">
          <div
            className="p-4 text-white rounded shadow-sm hover-shadow"
            style={{ backgroundColor: "#85C1E9", cursor: "pointer" }}
          >
            <h5>
              <FontAwesomeIcon icon={faTasks} className="me-2" />
                number of Tasks
            </h5>
            <p className="h4">120</p> {/* Example total tasks */}
            <small>Total tasks in progress</small>
          </div>
        </div>

        {/* Complete Tasks Tile */}
        <div className="col-md-3">
          <div
            className="p-4 text-white rounded shadow-sm hover-shadow"
            style={{ backgroundColor: "#A9DFBF", cursor: "pointer" }}
          >
            <h5>
              <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
              Complete Tasks
            </h5>
            <p className="h4">75</p> {/* Example completed tasks */}
            <small>Tasks completed</small>
          </div>
        </div>

        {/* Pending Tasks Tile */}
        <div className="col-md-3">
          <div
            className="p-4 text-dark rounded shadow-sm hover-shadow"
            style={{ backgroundColor: "#F9E79F", cursor: "pointer" }}
          >
            <h5>
              <FontAwesomeIcon icon={faClock} className="me-2" />
              Pending Tasks
            </h5>
            <p className="h4">45</p> {/* Example pending tasks */}
            <small>Tasks yet to start</small>
          </div>
        </div>
      </div>

      {/* Optionally, you can add more sections like charts below */}
    </div>
  );
};

export default Dashboard;
