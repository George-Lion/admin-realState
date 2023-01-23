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
    postal: null,
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
  let postalRef = React.createRef();
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
      postal: postalRef.current.value,
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
      <div>
        <h1>Nuevo cliente</h1>
      </div>
      <br />
      <div className={style.client_form}>
        <form onSubmit={sendData}>
          <div className={style.client_form__fila}>
            <div className={style.client_form__fila__divName}>
              <div>
                <label htmlFor="name">Nombre*</label>
              </div>
              <input
                type="text"
                name=""
                id="name"
                title="Introduzca nombre del cliente"
                className={style.client_form__fila__divName__inputName}
                ref={nameRef}
                onChange={changeState}
                required
              />
            </div>
          </div>
          <div className={style.client_form__fila}>
            <div className={style.client_form__fila__lastName}>
              <div className={style.client_form__fila__lastName_divLast}>
                <label htmlFor="lastName">1er Apellido</label>
              </div>
              <input
                type="text"
                name=""
                title="Introduzca primer apellido del cliente"
                id="lastName"
                className={style.client_form__fila__lastName__inputLast1}
                ref={surNameRef}
                onChange={changeState}
              />
            </div>
            <div className={style.client_form__fila__lastName}>
              <div className={style.client_form__fila__lastName_divLast}>
                <label htmlFor="lastName2">2º Apellido</label>
              </div>
              <input
                type="text"
                name=""
                title="Introduzca segundo apellido del cliente"
                id="lastName2"
                className={style.client_form__fila__lastName__inputLast2}
                ref={secondSurNameRef}
                onChange={changeState}
              />
            </div>
          </div>
          <br />
          <div className={style.client_form__fila}>
            <div className={style.client_form__fila__divRoad}>
              <div>
                <label htmlFor="typeOfRoad">Tipo de vía</label>
              </div>
              <select
                name="select"
                id="typeOfRoad"
                className={style.client_form__fila__divRoad__inputTypeRoad}
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

            <div className={style.client_form__fila__divRoad}>
              <div>
                <label htmlFor="direction">Nombre de vía</label>
              </div>
              <input
                type="text"
                name=""
                id="direction"
                className={style.client_form__fila__divRoad__inputRoad}
                ref={directionRef}
                onChange={changeState}
              />
            </div>
          </div>
          <div className={style.client_form__fila}>
            <div className={style.client_form__fila__divNumberRoad}>
              <div>
                <label htmlFor="directionNumber">Num. vía</label>
              </div>
              <input
                type="number"
                name=""
                id="directionNumber"
                className={style.client_form__fila__divNumberRoad__inputNumRoad}
                ref={houseNumberRef}
                onChange={changeState}
              />
            </div>
            <div className={style.client_form__fila__divNumberRoad}>
              <div>
                <label htmlFor="postal">Código postal</label>
              </div>
              <input
                type="number"
                name=""
                id="postal"
                className={style.client_form__fila__divNumberRoad__inputNumRoad}
                ref={postalRef}
                onChange={changeState}
              />
            </div>
            <div className={style.client_form__fila__divNumberRoad}>
              <div>
                <label htmlFor="province">Provincia*</label>
              </div>
              <input
                type="text"
                name=""
                id="province"
                className={style.client_form__fila__divNumberRoad__inputNumRoad}
                ref={provinceRef}
                onChange={changeState}
                required
              />
            </div>
          </div>
          <br />
          <div className={style.client_form__fila}>
            <div className={style.client_form__fila__divContact}>
              <div>
                <label htmlFor="landLine">Número Fíjo</label>
              </div>
              <input
                type="number"
                name=""
                id="landLine"
                className={style.client_form__fila__divContact__numberInput}
                ref={landLineRef}
                onChange={changeState}
              />
            </div>
            <div className={style.client_form__fila__divContact}>
              <div>
                <label htmlFor="phone">Número Móvil*</label>
              </div>
              <input
                type="number"
                name=""
                id="phone"
                className={style.client_form__fila__divContact__phoneInput}
                ref={phoneRef}
                onChange={changeState}
                required
              />
            </div>
          </div>
          <div className={style.client_form__fila}>
            <div className={style.client_form__fila__divEmail}>
              <div>
                <label htmlFor="email">Correo Electrónico*</label>
              </div>
              <input
                type="text"
                name=""
                id="email"
                className={style.client_form__fila__divEmail__inputEmail}
                ref={emailRef}
                onChange={changeState}
                required
              />
            </div>
          </div>

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
  );
};

export default NewClient;
