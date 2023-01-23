import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import { Dashboard } from "./views/Dashboard";
import { Calendar } from "./views/Calendar";
import State from "./views/State";
import NewClient from "./views/NewClient";
import "./App.scss";
import Clients from "./views/Clients";
import HouseList from "./components/HouseList/HouseList";
import { OneClient } from "./views/OneClient";
import NewHouse from "./views/NewHouse";

const Router = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/client" element={<NewClient />} />
        <Route path="/state" element={<HouseList />} />
        <Route path="/createHouse" element={<NewHouse />} />
        <Route path="/client/:id" element={<OneClient />} />
      </Routes>
    </div>
  );
};

export default Router;
