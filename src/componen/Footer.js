import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <h1>Eat, Cook, Repeat</h1>
        <p>Share your best recipe by uploading here !</p>
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
