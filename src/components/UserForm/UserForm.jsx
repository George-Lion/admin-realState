import React from "react";
import styles from "./UserForm.module.scss";

export const UserForm = () => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.content_box_form}>
          <div className={styles.content_form_div}>
            <input
              className={styles.content_form_div_input}
              type="text"
              placeholder="Dirección de Vivienda"
            />
          </div>
          <div className={styles.content_form_div}>
            <input
              className={styles.content_form_div_input}
              type="text"
              placeholder="Ciudad"
            />
          </div>
          <div className={styles.content_form_div}>
            <input
              className={styles.content_form_div_input}
              type="text"
              placeholder="Tipo de vivienda"
            />
          </div>
          <div className={styles.content_form_div}>
            <input
              className={styles.content_form_div_input}
              type="text"
              placeholder="Precio"
            />
          </div>
          <div className={styles.content_form_div}>
            <input
              className={styles.content_form_div_input}
              type="text"
              placeholder="Tipo de vivienda"
            />
          </div>
          <div className={styles.content_form_div}>
            <input
              className={styles.content_form_div_input}
              type="text"
              placeholder="Número de habitaciones"
            />
          </div>
          <div className={styles.content_form_div}>
            <input
              className={styles.content_form_div_input}
              type="text"
              placeholder="Baños"
            />
          </div>
          <div className={styles.content_form_div}>
            <input
              className={styles.content_form_div_input}
              type="text"
              placeholder="Metros"
            />
          </div>
          <div className={styles.content_form_div}>
            <input
              className={styles.content_form_div_input}
              type="text"
              placeholder="Año de Construcción"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
