import React from "react";
import { Link } from "react-router-dom";
import { linkOpen, normal } from "./styles.module.scss";

const Item = ({ to, svg, text, open, id }) => {
  return (
    <Link key={id} to={to} className={open ? linkOpen : normal}>
      <div>{svg}</div>
      {open ? <p>{text}</p> : null}
    </Link>
  );
};

export default Item;
