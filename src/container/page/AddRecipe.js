import React, { Component } from "react";
import NavigasiLink from "../../componen/NavigasiLink";
import Footer from "../../componen/Footer";
import style from "./AddRecipe.module.css";

export default class AddRecipe extends Component {
  render() {
    return (
      <>
        <NavigasiLink />
        <div className={style.container}>
          <input type="file" name="upload gambar" id="uploadGambar" />
          <input type="text" placeholder="Title" />
          <textarea name="ingredient" id="ingredient" cols="30" rows="10" placeholder="Ingredient" />
          <input type="text" name="video" id="video" placeholder="Video" />
          <button>Save</button>
          <Footer />
        </div>
      </>
    );
  }
}
