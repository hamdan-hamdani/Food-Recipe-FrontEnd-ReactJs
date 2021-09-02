import React, { Component } from "react";
import NavigasiLink from "../../componen/NavigasiLink";
import egg from "../../img/egg.svg";
import playicon from "../../img/playicon.svg";
import commentprofil from "../../img/commentprofil.svg";
import Footer from "../../componen/Footer";
import style from "./DetailResep.module.css";

export default class DetailResep extends Component {
  render() {
    return (
      <>
        <NavigasiLink />
        <div className={style.content}>
          <h1>Loream Sandwich</h1>
          <div className={style.boxImageResep}>
            <img src={egg} alt="egg" />
          </div>
          <h3>Ingredients</h3>
          <ul>
            <li>- 2 eggs</li>
            <li>- 2 tbsp mayonnaise</li>
            <li>- 3 slices bread</li>
            <li>- a little butter</li>
            <li>- ⅓ carton of cress</li>
            <li>- 2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese</li>
            <li>- crisps , to serve</li>
          </ul>
          <h3>Video Step</h3>
          <button>
            <div className={style.boxImagePlayIcon}>
              <img src={playicon} alt="play icon" />
            </div>
          </button>
          <button>
            <div className={style.boxImagePlayIcon}>
              <img src={playicon} alt="play icon" />
            </div>
          </button>
          <button>
            <div className={style.boxImagePlayIcon}>
              <img src={playicon} alt="play icon" />
            </div>
          </button>
          <button>
            <div className={style.boxImagePlayIcon}>
              <img src={playicon} alt="play icon" />
            </div>
          </button>
          <textarea name="comment" id="comment" cols="30" rows="10" defaultValue="Comment" />
          <button className={style.saveBtn}>Save</button>
          <h3>Comment</h3>
          <div className={style.flexComment}>
            <div className={style.boxImageCommentProfil}>
              <img src={commentprofil} alt="comment" />
            </div>
            <div className={style.commentDescription}>
              <p>Ayudia</p>
              <p>Nice recipe. simple and delicious, thankyou</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
