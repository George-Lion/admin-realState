import React, { useState } from "react";
import style from "./NewClient.module.scss";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Global from "./../Global";

const NewClient = () => {
  const url = Global.url;

  const [client, setClient] = useState({
    name: null,
    surName: null,
    secondSurName: null,
    typeOfRoad: null,
    direction: null,
    houseNumber: null,
    province: null,
    landLine: null,
    phone: null,
    email: null,
  });

  const [redirect, setRedirect] = useState(false);
  const [selectedRoad, setSelectedRoad] = useState("Calle");

  //referencia de los datos del formulario:
  let nameRef = React.createRef();
  let surNameRef = React.createRef();
  let secondSurNameRef = React.createRef();
  let typeOfRoadRef = React.createRef();
  let directionRef = React.createRef();
  let houseNumberRef = React.createRef();
  let provinceRef = React.createRef();
  let landLineRef = React.createRef();
  let phoneRef = React.createRef();
  let emailRef = React.createRef();

  //función que recoge la información mediante se escribe en el formulario:
  const changeState = () => {
    setClient({
      name: nameRef.current.value,
      surName: surNameRef.current.value,
      secondSurName: secondSurNameRef.current.value,
      typeOfRoad: typeOfRoadRef.current.value,
      direction: directionRef.current.value,
      houseNumber: houseNumberRef.current.value,
      province: provinceRef.current.value,
      landLine: landLineRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
    });
  };

  const sendData = (e) => {
    //evitamos que al resivir los datos se cargue la pantalla:
    e.preventDefault();
    //optenemos los ultimos datos que hemos introducido:
    changeState();
    //Petición HTTP con POST para guardar el articulo:
    axios
      .post(url + "save", client)
      .then((res) => {
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (redirect) {
    return <Navigate to="/clients" />;
  }

  return (
    <div className={style.client}>
      <h1>Introduzca los datos del cliente</h1>
      <div className={style.client_form}>
        <form onSubmit={sendData}>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="name">Nombre</label>
            </div>
            <input
              type="text"
              name=""
              id="name"
              ref={nameRef}
              onChange={changeState}
              required
            />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="lastName">1er Apellido</label>
            </div>
            <input
              type="text"
              name=""
              id="lastName"
              ref={surNameRef}
              onChange={changeState}
            />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="lastName2">2º Apellido</label>
            </div>
            <input
              type="text"
              name=""
              id="lastName2"
              ref={secondSurNameRef}
              onChange={changeState}
            />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="typeOfRoad">Tipo de vía</label>
            </div>
            <select
              name="select"
              id="typeOfRoad"
              value={selectedRoad}
              ref={typeOfRoadRef}
              onChange={(e) => {
                setSelectedRoad(e.target.value);
                changeState(e);
              }}
            >
              <option value="Avenida">Avenida</option>
              <option value="Calle">Calle</option>
              <option value="Camino">Camino</option>
            </select>
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="direction">Nombre de vía</label>
            </div>
            <input
              type="text"
              name=""
              id="direction"
              ref={directionRef}
              onChange={changeState}
            />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="directionNumber">Num. vía</label>
            </div>
            <input
              type="number"
              name=""
              id="directionNumber"
              ref={houseNumberRef}
              onChange={changeState}
            />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="province">Provincia</label>
            </div>
            <input
              type="text"
              name=""
              id="province"
              ref={provinceRef}
              onChange={changeState}
            />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="landLine">Número Fíjo</label>
            </div>
            <input
              type="number"
              name=""
              id="landLine"
              ref={landLineRef}
              onChange={changeState}
              required
            />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="phone">Número Móvil</label>
            </div>
            <input
              type="number"
              name=""
              id="phone"
              ref={phoneRef}
              onChange={changeState}
              required
            />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="email">Correo Electronico</label>
            </div>
            <input
              type="text"
              name=""
              id="email"
              ref={emailRef}
              onChange={changeState}
              required
            />
          </div>
          <div>
            <input
              className={style.client_form_fila_button}
              type="submit"
              value="Crear"
              id="create"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewClient;
