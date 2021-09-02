import React, { Component } from "react";
import NavigasiLink from "../../componen/NavigasiLink";
import cup from "../../img/cup.svg";
import wagyu from "../../img/wagyu.svg";
import style from "./DetailVideoResep.module.css";

export default class DetailVideoResep extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.boxSide}></div>
        <div>
          <NavigasiLink />
          <div className={style.flexVideo}>
            <div className={style.boxVideo}>
              <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <h1>Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then mix it</h1>
              <p>3 month ago</p>
            </div>
            <div className={style.rightSide}>
              <h3>Next</h3>
              <div className={style.boxImageSide}>
                <div className={style.boxImageSideAll}>
                  <img src={cup} alt="cup" />
                </div>
                <h3>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</h3>
                <p>HanaLohana - 3 month ago</p>
              </div>
              <div className={style.boxImageSide}>
                <div className={style.boxImageSideAll}>
                  <img src={wagyu} alt="wagyu" />
                </div>
                <h3>Beef Steak with Curry Sauce - [Step 6] Roast beef until it’s medium rare</h3>
                <p>HanaLohana - 3 month ago</p>
              </div>
              <div className={style.boxImageSide}>
                <div className={style.boxImageSideAll}>
                  <img src={wagyu} alt="wagyu" />
                </div>
                <h3>Beef Steak with Curry Sauce - [Step 6] Roast beef until it’s medium rare</h3>
                <p>HanaLohana - 3 month ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
