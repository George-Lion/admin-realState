import React from "react";
import style from "./NewClient.module.scss";

const NewClient = () => {
  return (
    <div className={style.client}>
      <h1>Introduzca los datos del cliente</h1>
      <div className={style.client_form}>
        <form action="">
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="">Nombre</label>
            </div>
            <input type="text" name="" id="" />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="">Apellidos</label>
            </div>
            <input type="text" name="" id="" />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="">Teléfono</label>
            </div>
            <input type="text" name="" id="" />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="">Correo Electronico</label>
            </div>
            <input type="text" name="" id="" />
          </div>
          <div className={style.client_form_fila}>
            <div>
              <label htmlFor="">Dirección de domicilio</label>
            </div>
            <input type="text" name="" id="" />
          </div>
          <div>
            <input
              className={style.client_form_fila_button}
              type="submit"
              value="Crear"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewClient;
