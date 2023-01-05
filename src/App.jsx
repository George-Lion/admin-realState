import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import { Dashboard } from "./views/Dashboard";
import { Calendar } from "./views/Calendar";
import State from "./views/State";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/state" element={<State />} />
      </Routes>
    </div>
  );
};

export default App;
