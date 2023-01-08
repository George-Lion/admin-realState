import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.content_box}>
          <div className={styles.content_box_area1}>
            <Link to={"/client"}>
              <button className={styles.content_box_area1_button1}>
                Nuevo cliente
              </button>
            </Link>
            <Link to={"/state"}>
              <button className={styles.content_box_area1_button2}>
                Crear inmueble
              </button>
            </Link>
            <Link to={"/state"}>
              <button className={styles.content_box_area1_button3}>
                Publicar un inmueble
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
