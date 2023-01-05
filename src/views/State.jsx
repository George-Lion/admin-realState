import React from "react";
import { UserForm } from "../components/UserForm/UserForm";
import { state } from "./State.module.scss";

const State = () => {
  return (
    <div className={state}>
      <UserForm />
    </div>
  );
};

export default State;
