import React, { useState, useEffect } from "react";
import Repositories from "./Repos";
import VideoArea from "./Video";
import Footer from "./Footer";

function AboutPage(props) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/96emil/repos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRepos(data);
      });
  }, []);

  return (
    <div
      className="backGround-Image"
      style={{
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(https://dreamypixel.com/wp-content/uploads/2017/08/Vivid-sunset-in-the-mountains.jpg)`,
      }}
    >
      <h2 className="about-Page-Header">About me</h2>
      <h4 className="about-Page-SecondHeader">
        Welcome to the about page! I know I said I would give you more <br></br>
        information about me but I thought it would be much more <br></br>{" "}
        interesting to tell you a story about a tortoise and a hare.
      </h4>
      <div className="video-player">
        <VideoArea />
      </div>

      <div id="repoList">
        <h3>Check out my Github repositories:</h3>
        {repos && <Repositories repos={repos} />}
      </div>

      <div className="about-Page-Text">
        A Hare was making fun of the Tortoise one day for being so slow. "Do you
        ever get anywhere?" he asked with a mocking laugh. "Yes," replied the
        Tortoise, "and I get there sooner than you think. I'll run you a race
        and prove it." The Hare was much amused at the idea of running a race
        with the Tortoise, but for the fun of the thing he agreed. So the Fox,
        who had consented to act as judge, marked the distance and started the
        runners off. The Hare was soon far out of sight, and to make the
        Tortoise feel very deeply how ridiculous it was for him to try a race
        with a Hare, he lay down beside the course to take a nap until the
        Tortoise should catch up. The Tortoise meanwhile kept going slowly but
        steadily, and, after a time, passed the place where the Hare was
        sleeping. But the Hare slept on very peacefully; and when at last he did
        wake up, the Tortoise was near the goal. The Hare now ran his swiftest,
        but he could not overtake the Tortoise in time. Slow and steady wins the
        race.
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
