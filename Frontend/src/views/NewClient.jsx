import React, { useState } from "react";
import style from "./NewClient.module.scss";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Global from "./../Global";

const NewClient = () => {
  const url = Global.url;

  const [client, setClient] = useState({
    name: null,
    lastName: null,
    phone: null,
    email: null,
    direction: null,
  });

  const [redirect, setRedirect] = useState(false);

  //referencia de los datos del formulario:
  let nameRef = React.createRef();
  let lastNameRef = React.createRef();
  let phoneRef = React.createRef();
  let emailRef = React.createRef();
  let directionRef = React.createRef();

  //función que recoge la información mediante se escribe en el formulario:
  const changeState = () => {
    setClient({
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      direction: directionRef.current.value,
    });
  };

  const sendData = (e) => {
    //evitamos que al resivir los datos se cargue la pantalla:
    e.preventDefault();
    //optenemos los ultimos datos que hemos introducido:
    changeState();
    //Petición HTTP con POST para guardar el articulo:
    axios.post(url + "save", client).then((res) => {
      setRedirect(true);
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
              <label htmlFor="">Nombre</label>
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
              <label htmlFor="">Apellidos</label>
            </div>
            <input
              type="text"
              name=""
              id="lastName"
              ref={lastNameRef}
              onChange={changeState}
              required
            />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="">Teléfono</label>
            </div>
            <input
              type="text"
              name=""
              id="phone"
              ref={phoneRef}
              onChange={changeState}
              required
            />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="">Correo Electronico</label>
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
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="">Dirección de domicilio</label>
            </div>
            <input
              type="text"
              name=""
              id="direction"
              ref={directionRef}
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
