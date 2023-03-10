import React from "react";
import styles from "./ClientList.module.scss";

const ClientList = ({ id, clientData, delClient }) => {
  const {
    name,
    surName,
    secondSurName,
    typeOfRoad,
    direction,
    houseNumber,
    province,
    postal,
    date,
    landLine,
    phone,
    email,
  } = clientData;

  const formatDate = (date) => {
    return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);
  };
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{surName}</td>
        <td>{secondSurName}</td>
        <td>{typeOfRoad}</td>
        <td>{direction}</td>
        <td>{houseNumber}</td>
        <td>{province}</td>
        <td>{postal}</td>
        <td>{landLine}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{formatDate(date)}</td>
      </tr>
    </tbody>
  );
};

export default ClientList;
