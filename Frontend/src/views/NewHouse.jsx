import React, { useState } from "react";
import style from "./NewHouse.module.scss";
import { Navigate } from "react-router-dom";
import axios from "axios";

import Global from "./../Global";

const NewHouse = () => {
  const url = Global.url;

  const [house, setHouse] = useState({
    typeStreet: null,
    direction: null,
    roadNumber: null,
    postalCode: null,
    province: null,
    housingType: null,
    operation: null,
    price: null,
    room: null,
    bathroom: null,
    meters: null,
  });

  const [redirect, setRedirect] = useState(false);
  const [selectedRoad, setSelectedRoad] = useState("Calle");
  const [selectedHousingType, setSelectedHousingType] = useState("Casa");
  const [typeOperation, setTypeOperation] = useState("Venta");

  //referencia de los datos del formulario:
  let typeStreetRef = React.createRef();
  let directionRef = React.createRef();
  let roadNumberRef = React.createRef();
  let postalCodeRef = React.createRef();
  let provinceRef = React.createRef();
  let housingTypeRef = React.createRef();
  let operationRef = React.createRef();
  let priceRef = React.createRef();
  let roomRef = React.createRef();
  let bathroomRef = React.createRef();
  let metersRef = React.createRef();

  //función que recoge la información mediante se escribe en el formulario:
  const changeState = () => {
    setHouse({
      typeStreet: typeStreetRef.current.value,
      direction: directionRef.current.value,
      roadNumber: roadNumberRef.current.value,
      postalCode: postalCodeRef.current.value,
      province: provinceRef.current.value,
      housingType: housingTypeRef.current.value,
      operation: operationRef.current.value,
      price: priceRef.current.value,
      room: roomRef.current.value,
      bathroom: bathroomRef.current.value,
      meters: metersRef.current.value,
    });
  };

  const sendData = (e) => {
    //evitamos que al resivir los datos se cargue la pantalla:
    e.preventDefault();
    //optenemos los ultimos datos que hemos introducido:
    changeState();
    //Petición HTTP con POST para guardar el articulo:
    axios
      .post(url + "saveHouse", house)
      .then((res) => {
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (redirect) {
    return <Navigate to="/state" />;
  }
  return (
    <div>
      <div className={style.content}>
        <div className={style.content__form}>
          <form onSubmit={sendData}>
            <div className={style.content__form__box}>
              <div className={style.content__form__box__roadDiv}>
                <div>
                  <div>
                    <label htmlFor="typeStreet">Tipo de vía*</label>
                  </div>
                  <div>
                    <select
                      name="select"
                      id="typeStreet"
                      value={selectedRoad}
                      className={
                        style.content__form__box__roadDiv__roadTypeInput
                      }
                      onChange={(e) => {
                        setSelectedRoad(e.target.value);
                        changeState(e);
                      }}
                      ref={typeStreetRef}
                    >
                      <option value="Avenida">Avenida</option>
                      <option value="Calle">Calle</option>
                      <option value="Camino">Camino</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <label>Dirección*</label>
                  </div>
                  <div>
                    <input
                      name="direction"
                      className={style.content__form__box__roadDiv__roadInput}
                      ref={directionRef}
                      onChange={changeState}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className={style.content__form__box__roadData}>
              <div>
                <div>
                  <label>Número de vía</label>
                </div>
                <div>
                  <input
                    name="RoadNumber"
                    className={style.content__form__box__roadData__numberInput}
                    ref={roadNumberRef}
                    onChange={changeState}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>Código postal</label>
                </div>
                <div>
                  <input
                    name="postalCode"
                    className={style.content__form__box__roadData__codeInput}
                    ref={postalCodeRef}
                    onChange={changeState}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>Provincia</label>
                </div>
                <div>
                  <input
                    name="tipoOfHouse"
                    className={style.content__form__box__roadData__typeInput}
                    ref={provinceRef}
                    onChange={changeState}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className={style.content__form__box__housePrice}>
              <div>
                <div>
                  <label>Tipo de vivienda</label>
                </div>
                <div>
                  <select
                    name="select"
                    id="housingType"
                    value={selectedHousingType}
                    className={
                      style.content__form__box__housePrice__housingTypeInput
                    }
                    onChange={(e) => {
                      setSelectedHousingType(e.target.value);
                      changeState(e);
                    }}
                    ref={housingTypeRef}
                  >
                    <option value="Casa">Casa</option>
                    <option value="Chalet">Chalet</option>
                    <option value="Piso">Piso</option>
                    <option value="Estudio">Estudio</option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Ático">Ático</option>
                    <option value="Vivienda plurifamiliar">
                      Vivienda plurifamiliar
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label>Tipo de operación*</label>
                </div>
                <div>
                  <select
                    name="select"
                    id="operation"
                    value={typeOperation}
                    className={
                      style.content__form__box__housePrice__housingTypeInput
                    }
                    onChange={(e) => {
                      setTypeOperation(e.target.value);
                      changeState(e);
                    }}
                    ref={operationRef}
                  >
                    <option value="Venta">Venta</option>
                    <option value="Alquiler">Alquiler</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label>Precio*</label>
                </div>
                <div>
                  <input
                    name="price"
                    type="number"
                    className={
                      style.content__form__box__housePrice__housingTypeInput
                    }
                    ref={priceRef}
                    onChange={changeState}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className={style.content__form__box__houseDetails}>
              <div>
                <div>
                  <label>Habitación</label>
                </div>
                <div>
                  <input
                    name="numberOFToilets"
                    className={
                      style.content__form__box__houseDetails__houseDetailsInput
                    }
                    ref={roomRef}
                    onChange={changeState}
                  />
                </div>
              </div>
              <br />
              <div>
                <div>
                  <div>
                    <label>Baño</label>
                  </div>
                  <div>
                    <input
                      name="Heating"
                      className={
                        style.content__form__box__houseDetails__houseDetailsInput
                      }
                      ref={bathroomRef}
                      onChange={changeState}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div>
                <div>
                  <label>Metros Construidos</label>
                </div>
                <div>
                  <input
                    name="yearOfContruction"
                    className={
                      style.content__form__box__houseDetails__houseDetailsInput
                    }
                    ref={metersRef}
                    onChange={changeState}
                  />
                </div>
              </div>
            </div>
            <br />
            <div>
              <input
                className={style.client_form__fila_button}
                type="submit"
                value="Crear"
                id="create"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewHouse;
