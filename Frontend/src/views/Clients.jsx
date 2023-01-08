import React from "react";
import { people } from "../Data/People";
import styles from "./Clients.module.scss";

const Clients = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_list}>
        <h1>CLIENTES</h1>
        <div className={styles.content_list_person}>
          <div className={styles.content_list_person_box1}>ID</div>
          <div className={styles.content_list_person_box1}>Nombre</div>
          <div className={styles.content_list_person_box1}>Apellido</div>
          <div className={styles.content_list_person_box1}>Teléfono</div>
          <div className={styles.content_list_person_box1}>
            Correo Electronico
          </div>
          <div className={styles.content_list_person_box1}>Domicilio</div>
        </div>
        {people.map((client, index) => {
          return (
            <div key={index} className={styles.content_list_person}>
              <div className={styles.content_list_person_box}>
                <p>{client._id}</p>
              </div>
              <div className={styles.content_list_person_box}>
                <p>{client.name}</p>
              </div>
              <div className={styles.content_list_person_box}>
                <p>{client.lastName}</p>
              </div>
              <div className={styles.content_list_person_box}>
                <p>{client.phone}</p>
              </div>
              <div className={styles.content_list_person_box}>
                <p>{client.email}</p>
              </div>
              <div className={styles.content_list_person_box}>
                <p>{client.direction}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
