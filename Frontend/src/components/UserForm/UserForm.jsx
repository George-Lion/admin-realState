import React from "react";
import styles from "./UserForm.module.scss";

export const UserForm = () => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.content_box_form}>
          <form>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Dirección de Vivienda"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Ciudad"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Tipo de vivienda"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Precio"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <select id="opciones" name="opciones">
                <option value="1">No</option>
                <option value="2">Si</option>
              </select>
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="number"
                placeholder="Habitaciones"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="number"
                placeholder="Baños"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="number"
                placeholder="Metros"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Año de Construcción"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Planta"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Descripción del inmueble"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Garaje"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Calefacción"
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Aire Acondicionado"
              />
              <input
                className={styles.content_box_form_div_input}
                type="submit"
                value="Crear"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
