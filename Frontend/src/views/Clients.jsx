import React, { useState, useEffect } from "react";
import ClientList from "../components/ClientList/ClientList";
import axios from "axios";
import Global from "../Global";
import styles from "./Clients.module.scss";
import { FaSearch } from "react-icons/fa";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const url = Global.url;

  useEffect(() => {
    getClients(currentPage, searchTerm);
  }, [clients.length]);

  const handleSearch = (event) => {
    event.preventDefault();
    /*  if (!searchTerm || searchTerm.trim() === "") {
      // Muestra un mensaje de error o una alerta al usuario si el término de búsqueda es vacío o nulo
      return alert("Por favor ingresa un término de búsqueda válido");
    } */
    getClients(1, searchTerm); // Realiza una nueva búsqueda empezando desde la página 1
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

  const getClients = (currentPage, searchTerm) => {
    axios
      .get(url + `clients?page=${currentPage}&search=${searchTerm}`)
      .then((res) => {
        if (res.data.status === "success") {
          setClients(res.data.clients.clients);
          setCurrentPage(res.data.clients.currentPage);
          setTotalPages(res.data.clients.totalPages);
        } else {
          setClients([]);
          setCurrentPage(1);
          setTotalPages(1);
        }
      });
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getClients(currentPage - 1, searchTerm);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      getClients(currentPage + 1, searchTerm);
    }
  };

  // Maneja el evento onClick del botón de búsqueda

  return (
    <div className={styles.content}>
      <div className={styles.content_list}>
        <h1>CLIENTES</h1>
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
                <th>Nombre</th>
                <th>1 Apellido</th>
                <th>2 Apellido</th>
                <th>Fíjo</th>
                <th>Móvil</th>
                <th>Email</th>
                <th>Direction</th>
                <th>Num.vía</th>
                <th>Fecha de creación</th>
              </tr>
            </thead>
            {clients != "" ? (
              clients.map((client, index) => {
                return (
                  <ClientList key={index} id={index} clientData={client} />
                );
              })
            ) : (
              <div className={styles.add}>
                <h4> No se han encontrado datos similares </h4>
              </div>
            )}
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

export default Clients;
