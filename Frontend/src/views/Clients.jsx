import React, { useState, useEffect } from "react";
import ClientList from "../components/ClientList/ClientList";
import axios from "axios";
import Global from "../Global";
import styles from "./Clients.module.scss";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const url = Global.url;

  useEffect(() => {
    getClients();
  }, [clients.length]);

  const getClients = () => {
    axios.get(url + "clients").then((res) => {
      setClients(res.data.clients);
    });
  };

  return (
    <div className={styles.content}>
      <div className={styles.content_list}>
        <h1>CLIENTES</h1>
        <div className={styles.content_list_person}>
          <div className={styles.content_list_person_box1}>Nombre</div>
          <div className={styles.content_list_person_box1}>Apellido</div>
          <div className={styles.content_list_person_box1}>Teléfono</div>
          <div className={styles.content_list_person_box1}>
            Correo Electronico
          </div>
          <div className={styles.content_list_person_box1}>Domicilio</div>
          <div className={styles.content_list_person_box1}>
            Fecha de creación
          </div>
        </div>
        {clients.map((client, index) => {
          return <ClientList key={index} id={index} clientData={client} />;
        })}
      </div>
    </div>
  );
};

export default Clients;
