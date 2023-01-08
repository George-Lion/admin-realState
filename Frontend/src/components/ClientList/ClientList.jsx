import React from "react";
import styles from "./ClientList.module.scss";

const ClientList = ({ id, clientData, delClient }) => {
  const { name, lastName, phone, email, direction, date } = clientData;

  const formatDate = (date) => {
    return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);
  };
  return (
    <div>
      <div className={styles.person}>
        <div className={styles.person_box}>
          <p>{name}</p>
        </div>
        <div className={styles.person_box}>
          <p>{lastName}</p>
        </div>
        <div className={styles.person_box}>
          <p>{phone}</p>
        </div>
        <div className={styles.person_box}>
          <p>{email}</p>
        </div>
        <div className={styles.person_box}>
          <p>{direction}</p>
        </div>
        <div className={styles.person_box}>
          <p>{formatDate(date)}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
