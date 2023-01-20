import React from "react";
import { useParams } from "react-router-dom";

const ClientDetails = ({ clients }) => {
  const { id } = useParams();
  const client = clients.find((client) => client.id === id);
  return (
    <div>
      <h2>Detalles del cliente</h2>
      <p>Nombre: {client.name}</p>
      <p>Apellido: {client.surname}</p>
      <p>Email: {client.email}</p>
      {/* mostrar más detalles del cliente */}
    </div>
  );
};

export default ClientDetails;
