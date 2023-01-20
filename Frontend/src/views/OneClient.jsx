import React from "react";
import ClientDetails from "../components/ClientDetails/ClientDetails";

export const OneClient = () => {
  return (
    <div>
      <ClientDetails clients={clients} />
    </div>
  );
};
