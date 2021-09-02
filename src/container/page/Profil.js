import React from "react";
import NavigasiLink from "../../componen/NavigasiLink";
import profil from "../../img/profil.svg";
import bombchicken from "../../img/bombchicken.svg";
import bananaspancake from "../../img/bananaspancake.svg";
import style from "./Profil.module.css";

export default function Profil() {
  return (
    <>
      <NavigasiLink />
      <div className={style.boxImageProfil}>
        <img src={profil} alt="profil" />
      </div>
      <p>Garneta Sharina</p>
      <div className={style.flex}>
        <p>My Recipe</p>
        <p>Saved Recipe</p>
        <p>Liked Recipe</p>
      </div>
      <hr />
      <div className={style.containerImage}>
        <div className={style.flexImage}>
          <img src={bombchicken} alt="chicken" />
        </div>
        <div className={style.flexImage}>
          <img src={bananaspancake} alt="chicken" />
        </div>
      </div>
      <footer className={style.footer}>
        <ul>
          <li>Product</li>
          <li>Company</li>
          <li>Learn More</li>
          <li>Get In Touch</li>
        </ul>
      </footer>
    </>
  );
}
