import React, { useState, useEffect } from "react";
import axios from "axios";
import Global from "../Global";
import styles from "./Clients.module.scss";
import { FaSearch } from "react-icons/fa";
import HouseList from "../components/HouseList/HouseList";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const url = Global.url;

  useEffect(() => {
    getHouses(currentPage, searchTerm);
  }, [houses.length]);

  const handleSearch = (event) => {
    event.preventDefault();

    getHouses(1, searchTerm);
  };

  const handleSearchInput = (event) => {
    const regex = /^[a-zA-Z0-9@.]*$/;
    if (!regex.test(event.target.value)) {
      event.preventDefault();
      return;
    }

    setSearchTerm(event.target.value);
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  const getHouses = (currentPage, searchTerm) => {
    axios
      .get(url + `houses?page=${currentPage}&search=${searchTerm}`)
      .then((res) => {
        if (res.data.status === "success") {
          setHouses(res.data.houses.houses);
          setCurrentPage(res.data.houses.currentPage);
          setTotalPages(res.data.houses.totalPages);
        } else {
          setHouses([]);
          setCurrentPage(1);
          setTotalPages(1);
        }
      });
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getHouses(currentPage - 1, searchTerm);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      getHouses(currentPage + 1, searchTerm);
    }
  };

  // Maneja el evento onClick del botón de búsqueda

  return (
    <div className={styles.content}>
      <div className={styles.content_list}>
        <h1>INMUEBLES</h1>
        <div className={styles.content_list__search}>
          <button onClick={handleSearch}>
            <FaSearch style={{ color: "white" }} />
          </button>
          <input
            className={styles.content_list__search__searchInput}
            type="text"
            value={searchTerm}
            onChange={handleSearchInput}
            onKeyDown={handleSearchInput}
            placeholder="Buscar"
          />
        </div>

        <div className={styles.content_list_person}>
          <table className={styles.contentTable}>
            <thead>
              <tr>
                <th>Tipo de vía</th>
                <th>Dirección</th>
                <th>Número de vía</th>
                <th>Código postal</th>
                <th>Provincia</th>
                <th>Tipo de vivienda</th>
                <th>Tipo de operación</th>
                <th>Precio</th>
                <th>Habitaciones</th>
                <th>Baños</th>
                <th>Metros Construidos</th>
                <th>Fecha de creación</th>
              </tr>
            </thead>
            {houses != ""
              ? houses.map((house, index) => {
                  return <HouseList key={index} id={index} houseData={house} />;
                })
              : ""}
          </table>
        </div>
      </div>

      <div className={styles.content_list_person_box3}>
        <button
          className={styles.content_list_person_box3_actionButton}
          onClick={goToPrevPage}
        >
          Anterior
        </button>
        Página {currentPage} de {totalPages}
        <button
          className={styles.content_list_person_box3_actionButton}
          onClick={goToNextPage}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Houses;
