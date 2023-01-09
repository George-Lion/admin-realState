import React from "react";
import styles from "./ClientList.module.scss";

const ClientList = ({ id, clientData, delClient }) => {
  const {
    name,
    surName,
    secondSurName,
    landLine,
    phone,
    email,
    direction,
    houseNumber,
    date,
  } = clientData;

  const formatDate = (date) => {
    return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);
  };
  return (
    <div className={styles.person}>
      <div className={styles.person__row}>
        <div className={styles.person__box}>
          <p>{name}</p>
        </div>
        <div className={styles.person__box}>
          <p>{surName}</p>
        </div>
        <div className={styles.person__box}>
          <p>{secondSurName}</p>
        </div>
        <div className={styles.person__box}>
          <p>{landLine}</p>
        </div>
        <div className={styles.person__box}>
          <p>{phone}</p>
        </div>
        <div className={styles.person__box}>
          <p>{email}</p>
        </div>
        <div className={styles.person__box}>
          <p>{direction}</p>
        </div>
        <div className={styles.person__box}>
          <p>{houseNumber}</p>
        </div>
        <div className={styles.person__box}>
          <p>{formatDate(date)}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
