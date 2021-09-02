import React, { Component } from "react";
import style from "./SearchRecipe.module.css";
import searchicon from "../img/searchicon.svg";

export default class SearchRecipe extends Component {
  render() {
    return (
      <>
        <h1 className={style}>Discover Recipe & Delicious Food</h1>
        <div className={style.boxsearch}>
          <div className={style.boximagesearchicon}>
            <img src={searchicon} alt="search icon" />
          </div>
          <input className={style.searchRecipe} type="text" name="searchRecipe" id="searchRecipe" placeholder="search recipe" />
        </div>
      </>
    );
  }
}
