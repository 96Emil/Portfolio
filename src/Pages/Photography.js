import React from "react";
import Footer from "./Footer";

const Photography = () => {
  return (
    <div
      className="backGround-Image Photography"
      style={{
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(http://res.cloudinary.com/simpleview/image/upload/v1589240467/clients/gatlinburgtn/Cliff_tops_sunset_7081c2a6-5a12-4036-82d5-194539341277.jpg)`,
      }}
    >
      <h2 className="photographyHeader">Check out some of my photographs</h2>
      <p className="photographyText">
        All photos were taken by me, I will probably add more as time goes by
      </p>

      {/* Skapar container för att kunna visa bilderna som jag vill */}

      <div className="container">
        <div className="card">
          <img
            className="photography-picture"
            src={require("../components/images/sunnytrees.jpg")}
            alt="React"
          />
          <div className="card-body">
            <p>Sun shining through trees an early summer day</p>
          </div>
        </div>
        <div className="card">
          <img
            className="photography-picture"
            src={require("../components/images/canadagoose.jpg")}
            alt="React"
          />
          <div className="card-body">
            <p>A canada goose staring at me, I told him my day was great</p>
          </div>
        </div>
        <div className="card">
          <img
            className="photography-picture"
            src={require("../components/images/oceancliffs.jpg")}
            alt="React"
          />
          <div className="card-body">
            <p>Cliffs and very clear water</p>
          </div>
        </div>
        <div className="card">
          <img
            className="photography-picture"
            src={require("../components/images/mountainsheep.jpg")}
            alt="React"
          />
          <div className="card-body">
            <p>Perhaps I found The Shire in real life but for sheep</p>
          </div>
        </div>
        <div className="card">
          <img
            className="photography-picture"
            src={require("../components/images/darkcliffs.jpg")}
            alt="React"
          />
          <div className="card-body">
            <p>Not the most inviting beach but looks cool</p>
          </div>
        </div>
        <div className="card">
          <img
            className="photography-picture"
            src={require("../components/images/tinystream.jpg")}
            alt="React"
          />
          <div className="card-body">
            <p>A tiny stream up in the mountains</p>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Photography;
