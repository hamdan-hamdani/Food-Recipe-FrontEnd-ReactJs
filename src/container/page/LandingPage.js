import React from "react";
import NavigasiLink from "../../componen/NavigasiLink";
import SearchRecipe from "../../componen/SearchRecipe";
import style from "./LandingPage.module.css";
import Footer from "../../componen/Footer";
import chat from "./Chat.module.css";
import User from "../../componen/User";
import bgplate from "../../img/bgplate.svg";
import lettuce from "../../img/lettuce.svg";
import plate from "../../img/plate.svg";
import pizza from "../../img/pizza.svg";
import burger from "../../img/burger.svg";
import swpotburger from "../../img/sweetpotatoburger.svg";
import chickenkare from "../../img/chickenkare.svg";
import bombchicken from "../../img/bombchicken.svg";
import banana from "../../img/banana.svg";
import coffelava from "../../img/coffelava.svg";
import sugarsalmon from "../../img/sugarsalmon.svg";
import indiansalad from "../../img/indiansalad.svg";

export default function LandingPage() {
  return (
    <>
      <div className={style.container}>
        <div className={style.leftcontent}>
          <NavigasiLink />
          <div className={chat.boxSearchRecipe}>
            <SearchRecipe />
          </div>
        </div>
        <div className={`${chat.rightContent} ${style.rightContent}`}>
          <User />
          <div className={chat.boxImage}>
            <img src={bgplate} alt="food" />
            <img className={style.lettuce} src={lettuce} alt="lettuce" />
            <div className={style.boxImgPlate}>
              <img className={style.plate} src={plate} alt="plate" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.mainContent}>
        <div className={style.popularContent}>
          <div className={style.boxPopular}></div>
          <p>Popular For You !</p>
        </div>
        <div className={style.boxImageMainContent}>
          <img src={bgplate} alt="food" />
        </div>
        <div className={style.boxPizzaBurger}>
          <img className={style.pizza} src={pizza} alt="pizza" />
          <img className={style.burger} src={burger} alt="burger" />
          <img className={style.bgplate} src={bgplate} alt="background" />
        </div>
        <div className={style.popularContent}>
          <div className={style.boxPopular}></div>
          <p>New Recipe</p>
        </div>
        <div className={style.boxNewRecipe}></div>
        <div className={style.flexNewRecipe}>
          <div className={style.boxImageswpotburger}>
            <img src={swpotburger} alt="sweet potato burger" />
          </div>
          <div className={style.description}>
            <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
            <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className={style.popularContent}>
          <div className={style.boxPopular}></div>
          <p>Popular Recipe</p>
        </div>
        <div className={style.flexGallery}>
          <img src={chickenkare} alt="" />
          <img src={bombchicken} alt="" />
          <img src={banana} alt="" />
          <img src={coffelava} alt="" />
          <img src={sugarsalmon} alt="" />
          <img src={indiansalad} alt="" />
        </div>
        <Footer />
      </div>
    </>
  );
}
