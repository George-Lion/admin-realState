import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.content_box}>
          <div className={styles.content_box_area1}>
            <Link to={"/state"}>
              <button className={styles.content_box_area1_button1}>
                Crear Contacto
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
