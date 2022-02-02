import React from "react";
import Likes from "./Likes";
import Dislikes from "./Dislikes";
import Footer from "./Footer";

const Home = () => {
  return (
    <div
      className="backGround-Image"
      style={{
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(https://papers.co/wallpaper/papers.co-mg92-night-sky-wide-mountain-star-shining-nature-36-3840x2400-4k-wallpaper.jpg)`,
      }}
    >
      <img
        className="Profile-Picture"
        src={require("../components/images/profilepicture.jpg")}
        alt="React"
      />

      <div
        style={{
          color: "aqua",
        }}
      >
        <h5 className="likes-header">
          Do you like or dislike <br></br> my portfolio?
        </h5>
        <Likes />
        <Dislikes />
      </div>
      <div className="HomePageHeader">
        I am Emil Söderback <br></br> Welcome to my Portfolio
      </div>
      <div className="HomePageText">
        This is my portfolio, here you will find information about me and things
        I have done and like to do. In the about page you can find further
        information about me, under the contact page you will find ways to
        contact me (please don´t). Under photography you will find some samples
        from a hobby of mine, photography. Hope you enjoy your visit, if you
        like my portfolio give it a dislike so I know you are reading this text.
        Thank you!
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
