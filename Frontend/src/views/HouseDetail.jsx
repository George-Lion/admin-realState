import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Global from "../Global";
import style from "./HouseDetail.module.scss";
import axios from "axios";
import { GiHouse, GiFamilyHouse } from "react-icons/gi";
import { MdOutlineApartment } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import EditHouseModal from "../components/EditHouseModal/EditHouseModal";

const HouseDetail = () => {
  const url = Global.url;
  const [house, setHouse] = useState({});
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

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

  const updateHouse = () => {
    axios
      .get(url + `/houses/${id}`)
      .then((res) => {
        setHouse(res.data.house);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function renderHousingType(housingType) {
    switch (housingType) {
      case "Casa":
        return (
          <div className={style.content__infoBox__icon}>
            <GiHouse />
          </div>
        );
      case "Chalet":
        return (
          <div className={style.content__infoBox__icon}>
            <GiFamilyHouse />
          </div>
        );
      case "Piso":
        return (
          <div className={style.content__infoBox__icon}>
            <MdOutlineApartment />
          </div>
        );
      default:
        return <div className={style.content__infoBox__icon}>3</div>;
    }
  }

  return (
    <>
      <div className={style.content}>
        <div className={style.content__infoBox}>
          <div className={style.content__infoBox__header}>
            <div className={style.content__infoBox__header__icon}>
              {renderHousingType(house.housingType)}
            </div>

            <div className={style.content__infoBox__header__info}>
              <div className={style.content__infoBox__header__info__road}>
                <h3 style={{ marginRight: "5px" }}>
                  {house.typeStreet ? house.typeStreet : "NE"}
                </h3>
                <h3 style={{ marginRight: "5px" }}>
                  {house.direction ? house.direction : "NE"}
                </h3>
                <h3>{house.roadNumber ? house.roadNumber : "NE"}</h3>
              </div>
              <div className={style.content__infoBox__header__info__road}>
                <h4>{house.province ? house.province : "NE"}</h4>
              </div>
              <div className={style.content__infoBox__header__info__road}>
                <p>{house.postalCode ? house.postalCode : "NE"}</p>
              </div>
            </div>
            <div>
              <button
                className={style.content__editButton}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                EDITAR
              </button>
            </div>
          </div>

          <div className={style.content__infoBox__body}>
            <div className={style.content__infoBox__body__bodyInfo}>
              <p>
                Tipo de vivienda: {house.housingType ? house.housingType : "NE"}
              </p>
              <p>Operaci??n: {house.operation ? house.operation : "NE"}</p>
              <p>Precio: {house.price ? house.price : "NE"} ???</p>
              <br />
              <h3>Caracteristicas del inmueble:</h3>
              <div>
                <p>
                  <strong>Habitaciones:</strong>{" "}
                  {house.room ? house.room : "NE"}
                </p>
                <p>
                  <strong>Ba??os:</strong>{" "}
                  {house.bathroom ? house.bathroom : "NE"}
                </p>
                <p>
                  <strong>Metros construidos:</strong>{" "}
                  {house.meters ? house.meters : "NE"}
                </p>
                <p>
                  <strong>Metros ??tiles:</strong>{" "}
                  {house.meters ? house.meters : "NE"}
                </p>
                <p>
                  <strong>Metros ??tiles:</strong>{" "}
                  {house.meters ? house.meters : "NE"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditHouseModal
        show={showModal}
        onClose={() => setShowModal(false)}
        houseDetail={house}
        updateHouse={updateHouse}
        id={house.id}
      />
    </>
  );
};

export default HouseDetail;
