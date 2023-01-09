import React, { useState, useEffect } from "react";
import ClientList from "../components/ClientList/ClientList";
import axios from "axios";
import Global from "../Global";
import styles from "./Clients.module.scss";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const url = Global.url;

  useEffect(() => {
    getClients(currentPage, searchTerm);
  }, [clients.length]);

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
  const handleSearch = (event) => {
    event.preventDefault();
    /*  if (!searchTerm || searchTerm.trim() === "") {
      // Muestra un mensaje de error o una alerta al usuario si el término de búsqueda es vacío o nulo
      return alert("Por favor ingresa un término de búsqueda válido");
    } */
    getClients(1, searchTerm); // Realiza una nueva búsqueda empezando desde la página 1
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.content_list}>
        <div className="">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchInput}
            onKeyDown={handleSearchInput}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <h1>CLIENTES</h1>
        <div className={styles.content_list_person}>
          <div className={styles.content_list_person_box1}>Nombre</div>
          <div className={styles.content_list_person_box1}>1 Apellido</div>
          <div className={styles.content_list_person_box1}>2 Apellido</div>
          <div className={styles.content_list_person_box1}>Fijo</div>
          <div className={styles.content_list_person_box1}>Móvil</div>
          <div className={styles.content_list_person_box1}>
            Correo Electrónico
          </div>
          <div className={styles.content_list_person_box1}>Nombre vía</div>
          <div className={styles.content_list_person_box1}>Num.vía</div>
          <div className={styles.content_list_person_box1}>
            Fecha de creación
          </div>
        </div>
        {clients.map((client, index) => {
          return <ClientList key={index} id={index} clientData={client} />;
        })}
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
