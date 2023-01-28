import React, { useState, useEffect } from "react";
import style from "./EditHouseModal.module.scss";
import { useParams } from "react-router-dom";
import Global from "../../../src/Global";
import axios from "axios";

const EditHouseModal = ({ show, onClose, updateHouse }) => {
  const url = Global.url;
  const [house, setHouse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(url + `/houses/${id}`)
      .then((res) => {
        setHouse(res.data.house);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSave = () => {
    axios
      .put(url + `/house/edit/${id}`, house)
      .then((res) => {
        updateHouse();
        onClose();
        console.log("House updated successfully");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeTypeStreet = (event) => {
    setHouse({
      ...house,
      typeStreet: event.target.value ? event.target.value : "",
    });
  };

  const handleChangeDirection = (event) => {
    setHouse({
      ...house,
      direction: event.target.value ? event.target.value : "",
    });
  };

  const handleChangeRoadNumber = (event) => {
    setHouse({
      ...house,
      roadNumber: event.target.value ? event.target.value : "",
    });
  };

  const handleChangeProvince = (event) => {
    setHouse({
      ...house,
      province: event.target.value ? event.target.value : "",
    });
  };

  const handleChangePrice = (event) => {
    setHouse({
      ...house,
      price: event.target.value ? event.target.value : "",
    });
  };

  const handleChangeRoom = (event) => {
    setHouse({
      ...house,
      room: event.target.value ? event.target.value : "",
    });
  };

  const handleChangeBathRoom = (event) => {
    setHouse({
      ...house,
      bathroom: event.target.value ? event.target.value : "",
    });
  };

  const handleChangeMeters = (event) => {
    setHouse({
      ...house,
      meters: event.target.value ? event.target.value : "",
    });
  };

  if (!show) return null;
  return (
    <div className={style.modal}>
      <div className={style.content}>
        <span className={style.close} onClick={onClose}>
          &times;
        </span>
        <p>MODAL {house._id}</p>
        <div className={style.content__body}>
          <div>
            Tipo de vía:{" "}
            <input
              type="text"
              value={house.typeStreet}
              onChange={handleChangeTypeStreet}
            />
          </div>
          <p>
            Nombre de Calle:{" "}
            <input
              type="text"
              value={house.direction}
              onChange={handleChangeDirection}
            />
          </p>
          <p>
            Número de vía:{" "}
            <input
              type="text"
              value={house.roadNumber}
              onChange={handleChangeRoadNumber}
            />
          </p>
          <p>
            Provincia:{" "}
            <input
              type="text"
              value={house.province}
              onChange={handleChangeProvince}
            />
          </p>
          <div>
            Precio:{" "}
            <input
              type="number"
              value={house.price}
              onChange={handleChangePrice}
            />
          </div>
          <div>
            Habitaciones:{" "}
            <input
              type="number"
              value={house.room}
              onChange={handleChangeRoom}
            />
          </div>
          <div>
            Baños:{" "}
            <input
              type="number"
              value={house.bathroom}
              onChange={handleChangeBathRoom}
            />
          </div>
          <div>
            Metros:{" "}
            <input
              type="number"
              value={house.meters}
              onChange={handleChangeMeters}
            />
          </div>
        </div>
        <div className={style.content__footer}>
          <button
            className={style.content__footer__saveButton}
            onClick={handleSave}
          >
            guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditHouseModal;
