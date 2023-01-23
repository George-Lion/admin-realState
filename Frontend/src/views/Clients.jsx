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

  //filtros

  const [nameFilter, setNameFilter] = useState("");
  const [surname1Filter, setSurname1Filter] = useState("");
  const [surname2Filter, setSurname2Filter] = useState("");
  const [numberFilter, setNumberFilter] = useState("");
  const [addressFilter, setAddressFilter] = useState("");

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
        {/*  componente filter */}
        <div className={styles.filter}>
          <div>
            <input
              className={styles.filter__inputFil}
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              onKeyDown={handleSearchInput}
              placeholder="Nombre"
            />
          </div>
          <div>
            <input
              className={styles.filter__inputFil}
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              onKeyDown={handleSearchInput}
              placeholder="1er Apellido"
            />
          </div>
          <div>
            <input
              className={styles.filter__inputFil}
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              onKeyDown={handleSearchInput}
              placeholder="2 Apellido"
            />
          </div>
          <div>
            <input
              className={styles.filter__inputFil}
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              onKeyDown={handleSearchInput}
              placeholder="Nombre Vía"
            />
          </div>
          <div>
            <input
              className={styles.filter__inputFil}
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              onKeyDown={handleSearchInput}
              placeholder="Num. Vía"
            />
          </div>
          <div>
            <input
              className={styles.filter__inputFil}
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              onKeyDown={handleSearchInput}
              placeholder="Provincia"
            />
          </div>
          <div>
            <input
              className={styles.filter__inputFil}
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              onKeyDown={handleSearchInput}
              placeholder="Fíjo"
            />
          </div>
          <div>
            <input
              className={styles.filter__inputFil}
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              onKeyDown={handleSearchInput}
              placeholder="Móvil"
            />
          </div>
          <div>
            <input
              className={styles.filter__inputFil}
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              onKeyDown={handleSearchInput}
              placeholder="Email"
            />
          </div>
          <div>
            <button>BUSCAR</button>
          </div>
        </div>
        <div className={styles.content_list_person}>
          <table className={styles.contentTable}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>1er Apellido</th>
                <th>2º Apellido</th>
                <th>Tipo de vía</th>
                <th>Nombre Vía</th>
                <th>Num.vía</th>
                <th>Provincia</th>
                <th>Código Postal</th>
                <th>Fíjo</th>
                <th>Móvil</th>
                <th>Email</th>
                <th>Fecha de creación</th>
              </tr>
            </thead>
            {clients != ""
              ? clients.map((client, index) => {
                  return (
                    <ClientList key={index} id={index} clientData={client} />
                  );
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

export default Clients;
