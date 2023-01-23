import React, { useState } from "react";
import style from "./NewHouse.module.scss";

const NewHouse = () => {
  const [formData, setFormData] = useState({
    direction: "",
    RoadNumber: "",
    postalCode: "",
    typeOfRoad: "",
    tipoOfHouse: "",
    price: "",
    numberOFToilets: "",
    Heating: "",
    yearOfContruction: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <div className={style.content}>
        <div className={style.content__form}>
          <form onSubmit={handleSubmit}>
            <div className={style.content__form__box}>
              <div className={style.content__form__box__roadDiv}>
                <div>
                  <div>
                    <label htmlFor="typeOfRoad">Tipo de vía</label>
                  </div>
                  <div>
                    <select
                      name="select"
                      id="typeOfRoad"
                      className={
                        style.content__form__box__roadDiv__roadTypeInput
                      }
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
                </div>
                <div>
                  <div>
                    <label>Direction:</label>
                  </div>
                  <div>
                    <input
                      name="direction"
                      className={style.content__form__box__roadDiv__roadInput}
                      value={formData.direction}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className={style.content__form__box__roadData}>
              <div>
                <div>
                  <label>Road Number:</label>
                </div>
                <div>
                  <input
                    name="RoadNumber"
                    className={style.content__form__box__roadData__numberInput}
                    value={formData.RoadNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>Postal Code:</label>
                </div>
                <div>
                  <input
                    name="postalCode"
                    className={style.content__form__box__roadData__codeInput}
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>Type of House:</label>
                </div>
                <div>
                  <input
                    name="tipoOfHouse"
                    className={style.content__form__box__roadData__typeInput}
                    value={formData.tipoOfHouse}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <br />

            <label>Price:</label>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
            <br />
            <label>Number of Toilets:</label>
            <input
              name="numberOFToilets"
              value={formData.numberOFToilets}
              onChange={handleChange}
            />
            <br />
            <label>Heating:</label>
            <input
              name="Heating"
              value={formData.Heating}
              onChange={handleChange}
            />
            <br />
            <label>Year of Construction:</label>
            <input
              name="yearOfContruction"
              value={formData.yearOfContruction}
              onChange={handleChange}
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewHouse;
