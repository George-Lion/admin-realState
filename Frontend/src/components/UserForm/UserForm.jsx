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
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Ciudad"
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Tipo de vivienda"
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Precio"
                required
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
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="number"
                placeholder="Baños"
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="number"
                placeholder="Metros"
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Año de Construcción"
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Planta"
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Descripción del inmueble"
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Garaje"
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Calefacción"
                required
              />
            </div>
            <div className={styles.content_box_form_div}>
              <input
                className={styles.content_box_form_div_input}
                type="text"
                placeholder="Aire Acondicionado"
                required
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
