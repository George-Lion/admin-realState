import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import { Dashboard } from "./views/Dashboard";
import { Calendar } from "./views/Calendar";
import State from "./views/State";
import NewClient from "./views/NewClient";
import "./App.scss";
import Clients from "./views/Clients";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/client" element={<NewClient />} />
      </Routes>
    </div>
  );
};

export default App;
