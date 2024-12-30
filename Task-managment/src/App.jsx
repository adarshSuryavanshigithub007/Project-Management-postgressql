import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Dashboard from "./views/dashboard/Dashboard";
import Projects from "./views/admin/Projects";
import AdminNavbar from "./layout/AdminNavbar";
import AssignProjects from "./views/users/AssignProjects";
import TaskManagement from "./views/users/TaskManagement";
import AssignTask from "./views/users/AssignTask";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import TextArea from "./components/forms/formComponents/TextArea";
import Report from "./views/admin/Report";

function App() {
  return (
    <div>
      
      {/* <Register/> */}
      <HashRouter>
        <Navbar />
        {/* <AdminNavbar/> */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/assignprojects" element={<AssignProjects />} />
          <Route exact path="/board" element={<TaskManagement />} />
          <Route exact path="/assigntask" element={<AssignTask />} />
          <Route exact path="/report" element={<Report />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
