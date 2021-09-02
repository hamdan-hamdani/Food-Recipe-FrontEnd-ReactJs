import React from "react";
import { Link } from "react-router-dom";
import style from "./NavigasiLink.module.css";

export default function NavigasiLink() {
  return (
    <>
      <ul className={style}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addrecipe">Add Recipe</Link>
        </li>
        <li>
          <Link to="profil">Profile</Link>
        </li>
      </ul>
    </>
  );
}
