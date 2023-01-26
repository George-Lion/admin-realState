import React from "react";
import { useNavigate } from "react-router";

const HouseList = ({ id, houseData, delHouse, props }) => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/houses/${houseData._id}`);
  }
  const {
    typeStreet,
    direction,
    roadNumber,
    postalCode,
    province,
    housingType,
    operation,
    price,
    room,
    bathroom,
    meters,
    date,
  } = houseData;

  const formatDate = (date) => {
    return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);
  };
  return (
    <tbody>
      <tr onClick={handleClick}>
        <td>{typeStreet}</td>
        <td>{direction}</td>
        <td>{roadNumber}</td>
        <td>{postalCode}</td>
        <td>{province}</td>
        <td>{housingType}</td>
        <td>{operation}</td>
        <td>{price}</td>
        <td>{room}</td>
        <td>{bathroom}</td>
        <td>{meters}</td>
        <td>{formatDate(date)}</td>
      </tr>
    </tbody>
  );
};

export default HouseList;
