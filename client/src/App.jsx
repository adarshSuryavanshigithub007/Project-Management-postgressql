import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";  

import Navbar from "./layout/Navbar";
import AssignProjects from "./pages/users/AssignProjects";

const App = () => {
  return (
    <HashRouter>
      <Navbar>
        <Routes>
          <Route path="/assign" element={<AssignProjects />} />
        </Routes>
      </Navbar>
    </HashRouter>
  );
};

export default App;
